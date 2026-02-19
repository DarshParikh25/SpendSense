"use client";

import { PieChart, Pie, ResponsiveContainer, Sector, Legend } from "recharts";

import { currencyFormatter } from "@/lib/formatter";

const RADIAN = Math.PI / 180;

/* Percentage labels */
const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  fill,
  value,
  payload,
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
      {payload.proportion}%: {currencyFormatter.format(value)}
    </text>
  );
};

const ExpensePieChart = ({ costPerCat }) => {
  /* Slice colors */
  const COLORS = ["#FB5756", "#4ADE80", "#60A5FA", "#FACC15"];

  /* Convert value to number */
  const data = costPerCat.map((item, index) => ({
    ...item,
    name: item.category,
    value: Number(item.total),
    fill: COLORS[index % COLORS.length],
  }));

  /* Custom slice */
  const PieSlice = (props) => {
    const { index } = props;

    return <Sector {...props} fill={COLORS[index % COLORS.length]} />;
  };

  return (
    <div className="w-full flex h-80">
      <ResponsiveContainer width="120%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            shape={PieSlice}
            labelLine
            label={renderLabel}
            isAnimationActive={false}
          />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensePieChart;
