import { currencyFormatter } from "@/lib/formatter";
import { RechartsDevtools } from "@recharts/devtools";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CashFlowChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={450}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" axisLine={false} tickLine={false} />
        <YAxis width="auto" tickLine={false} />
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
        <Line
          type="monotone"
          dataKey="expense"
          stroke="#fd5756"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#72FF52"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 5 }}
        />
        <RechartsDevtools />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CashFlowChart;
