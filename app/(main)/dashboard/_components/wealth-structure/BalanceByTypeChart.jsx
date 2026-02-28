import { cn } from "@/lib/utils";
import { RechartsDevtools } from "@recharts/devtools";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const CustomShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
    payload,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* Main slice with rounded corners */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={20}
      />

      {/* Pointer */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={3} fill={fill} />

      {/* Label */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fontSize={14}
        fill={fill}
      >
        {payload.label}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fontSize={12}
        fill="#bebec0"
      >
        {(percent * 100).toFixed(2)}%
      </text>
    </g>
  );
};

const BalanceByTypeChart = ({ data }) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-10">
      <ResponsiveContainer width="90%" aspect={1.3}>
        <PieChart margin={{ bottom: 10 }}>
          <Pie
            data={data}
            innerRadius={"60%"}
            outerRadius={"70%"}
            paddingAngle={5}
            cornerRadius={20}
            dataKey="value"
            shape={(props) => <CustomShape {...props} />}
          />
          <RechartsDevtools />
        </PieChart>
      </ResponsiveContainer>

      {/* Legends */}
      <div
        className={cn(
          data.length <= 5 && "absolute max-w-50",
          "flex flex-col xl:flex-row xl:flex-wrap justify-center items-center gap-0 xl:gap-4",
        )}
      >
        {data.map(({ name, fill }, index) => (
          <div key={index} className="flex justify-center items-center gap-1">
            <span
              style={{ background: fill }}
              className="h-3 w-3 lg:w-4 lg:h-4 rounded-full border border-[#bebec0]"
            />
            <p
              style={{ color: fill }}
              className="text-xs sm:text-sm lg:text-base"
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceByTypeChart;
