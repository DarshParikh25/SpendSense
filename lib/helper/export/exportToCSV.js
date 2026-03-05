const exportToCSV = (data = [], filename = "transactions") => {
  if (!Array.isArray(data) || data.length === 0) {
    console.warn("No transactions to export.");
    alert("No transactions to export."); // change to toast
    return;
  }

  const headers = Object.keys(data[0]);

  const formatValue = (value) => {
    if (value === null || value === undefined) return "";

    if (typeof value === "number") {
      return value;
    }

    const str = String(value);

    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return `"${str.replace(/"/g, '""')}"`;
    }

    return str;
  };

  const csvRows = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((field) => formatValue(row[field])).join(","),
    ),
  ];

  const csvContent = csvRows.join("\r\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;

  const today = new Date().toISOString().split("T")[0];
  filename = `${filename}_${today}.csv`;

  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default exportToCSV;
