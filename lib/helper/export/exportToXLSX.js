const exportToXLSX = async (data = [], filename = "transactions") => {
  // smaller bundle size, faster load, and only loads when needed
  const { default: ExcelJS } = await import("exceljs");

  if (!Array.isArray(data) || data.length === 0) {
    console.warn("No transactions to export.");
    alert("No transactions to export."); // change to toast
    return;
  }

  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Transactions");

    const headers = Object.keys(data[0]);

    // Set columns dynamically
    worksheet.columns = headers.map((header) => ({
      header,
      key: header,
      width: Math.max(header.length + 4, 14),
    }));

    // Header styling
    const headerRow = worksheet.getRow(1);

    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };

    // Freeze header
    worksheet.views = [{ state: "frozen", ySplit: 1 }];

    // Insert rows
    data.forEach((row) => {
      const inserted = worksheet.addRow(row);

      // Amount formatting
      const amountCell = inserted.getCell(7);

      if (typeof amountCell.value === "number") {
        amountCell.numFmt = "#,##0.00";

        if (row.Type === "Income") {
          amountCell.font = { color: { argb: "FF10B981" } };
        }

        if (row.Type === "Expense") {
          amountCell.font = { color: { argb: "FFFB5756" } };
        }
      }
    });

    // Column width setter
    worksheet.columns.forEach((column) => {
      let maxLength = 0;

      column.eachCell({ includeEmpty: true }, (cell) => {
        const value = cell.value ? cell.value.toString() : "";
        maxLength = Math.max(maxLength, value.length);
      });

      column.width = maxLength + 1;
    });

    // Auto filter
    worksheet.autoFilter = {
      from: {
        row: 1,
        column: 1,
      },
      to: {
        row: 1,
        column: headers.length,
      },
    };

    // Generate file
    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;

    const today = new Date().toISOString().split("T")[0];
    filename = `${filename}_${today}.xlsx`;

    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log("XLSX export failed", error);
    alert("XLSX export failed", error); // change to toast
  }
};

export default exportToXLSX;
