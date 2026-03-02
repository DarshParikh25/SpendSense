import { currencyFormatter } from "@/lib/formatter";
import { RechartsDevtools } from "@recharts/devtools";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionBarChart = ({ transactionData }) => {
  return (
    <ResponsiveContainer width={"100%"} height={450}>
      <BarChart data={transactionData}>
        <CartesianGrid strokeDasharray={"3 3"} vertical={false} />
        <XAxis dataKey={"name"} axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          formatter={(value, name) => [
            currencyFormatter.format(value),
            name === "income" ? "Income" : "Expense",
          ]}
          contentStyle={{
            backgroundColor: "#1e1e24",
            borderWidth: "1.5px",
            borderColor: "#bebec0",
            borderRadius: "10px",
          }}
        />
        <Legend iconType="circle" />
        <Bar
          dataKey={"income"}
          name={"Income"}
          fill="#10b981"
          activeBar={{
            fill: "#10b981",
            stroke: "#1e1e24",
            strokeWidth: 2,
          }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey={"expense"}
          name={"Expense"}
          fill="#FB5756"
          activeBar={{ fill: "#FB5756", stroke: "#1e1e24", strokeWidth: 2 }}
          radius={[10, 10, 0, 0]}
        />
        <RechartsDevtools />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionBarChart;
