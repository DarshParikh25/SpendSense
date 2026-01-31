"use client";

import { PieChart, Pie, ResponsiveContainer, Sector, Legend } from "recharts";

/* Raw data */
const rawData = [
  { category: "Rental", value: "1500.00", proportion: "35.56" },
  { category: "Travel", value: "1251.66", proportion: "29.68" },
  { category: "Entertainment", value: "304.33", proportion: "7.22" },
  { category: "Shopping", value: "1161.13", proportion: "27.53" },
];

const RADIAN = Math.PI / 180;

/* Slice colors */
const COLORS = ["#FB5756", "#4ADE80", "#60A5FA", "#FACC15"];

/* Convert value to number */
const data = rawData.map((item, index) => ({
  ...item,
  name: item.category,
  value: Number(item.value),
  fill: COLORS[index % COLORS.length],
}));

/* Custom slice renderer (OFFICIAL way) */
const PieSlice = (props) => {
  const { index } = props;

  return <Sector {...props} fill={COLORS[index % COLORS.length]} />;
};

/* Percentage labels */
const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  fill,
  value,
  proportion,
}) => {
  const radius = outerRadius + 20;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="center"
      fontSize={12}
      fontWeight={500}
    >
      ${proportion}%: $${value.toFixed(2)}
    </text>
  );
};

const ExpensePieChart = () => {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            outerRadius={90}
            shape={PieSlice}
            labelLine
            label={renderLabel}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
