"use client";

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

const transactionData = [
  {
    name: "Feb 06",
    income: 2045.75,
    expense: 560.1,
  },
  {
    name: "Feb 05",
    income: 1045.75,
    expense: 260.1,
  },
  {
    name: "Feb 04",
    income: 2345.15,
    expense: 960.1,
  },
  {
    name: "Feb 03",
    income: 245.45,
    expense: 1005.1,
  },
  {
    name: "Feb 02",
    income: 3200.7,
    expense: 500.1,
  },
  {
    name: "Feb 01",
    income: 2005.0,
    expense: 260.16,
  },
];

const TransactionBarChart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={450}>
      <BarChart data={transactionData}>
        <CartesianGrid strokeDasharray={"3 3"} vertical={false} />
        <XAxis dataKey={"name"} axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
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
          fill="#72FF52"
          activeBar={{ fill: "#72ff52", stroke: "#1e1e24", strokeWidth: 2 }}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey={"expense"}
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
