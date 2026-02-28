import { currencyFormatter } from "@/lib/formatter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const ExpenseChart = ({ costPerCat }) => {
  const COLORS = ["#FB5756", "#4F8EF7", "#34C38F", "#F4B740", "#7B6CF6"];

  const data = costPerCat.map((item, index) => ({
    ...item,
    name: item.category,
    value: Number(item.total),
    fill: COLORS[index % COLORS.length],
  }));

  const ROW_HEIGHT = 42;
  const chartHeight = Math.max(data.length * ROW_HEIGHT, 150);

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 0, right: 100, left: 25, bottom: 0 }}
      >
        <XAxis type="number" domain={[0, 100]} hide />

        <YAxis
          type="category"
          dataKey="category"
          axisLine={false}
          tickLine={false}
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              dx={-75}
              dy={4}
              textAnchor="start"
              fill="#bebec0"
              fontSize={16}
              fontWeight={500}
            >
              {payload.value}
            </text>
          )}
        />

        <Bar
          dataKey="proportion"
          barSize={40}
          radius={[0, 6, 6, 0]}
          fill="#4F8EF7"
        >
          <LabelList
            content={({ y, height, index }) => {
              const item = data[index];

              return (
                <g>
                  <text
                    x="100%"
                    y={y + height / 2 - 4}
                    textAnchor="end"
                    fill="#bebec0"
                    fontSize={13}
                  >
                    {currencyFormatter.format(item.value)}
                  </text>

                  <text
                    x="100%"
                    y={y + height / 2 + 12}
                    textAnchor="end"
                    fill={item.fill}
                    fontSize={11}
                  >
                    ({item.proportion}%)
                  </text>
                </g>
              );
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
