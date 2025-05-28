import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../ui/chart";

const chartConfig = {
  count: {
    label: "Count",
    color: "red",
  },
};

export default function UserBarChart({ data }) {
  const chartData = data?.map((item) => ({
    month: item.month.split(" ")[0], // Extract just "Jan", "Feb", etc.
    count: item.count,
  }));

  // Calculate dynamic statistics for display
  const totalCount = chartData?.reduce((sum, item) => sum + item.count, 0);
  const maxCount = Math.max(...chartData?.map((item) => item.count));
  const minCount = Math.min(...chartData?.map((item) => item.count));

  return (
        <div className="mt-5 w-full">
      <div className="flex flex-col justify-center items-center mb-6">
        <h2 className="text-2xl font-bold">Monthly Data for 2025</h2>
        <p className="text-muted-foreground">
          Showing count values across all months
        </p>
        <div className="flex gap-6 mt-2 text-sm text-muted-foreground">
          <span>
            Total:{" "}
            <span className="font-medium text-foreground">{totalCount}</span>
          </span>
          <span>
            Max: <span className="font-medium text-foreground">{maxCount}</span>
          </span>
          <span>
            Min: <span className="font-medium text-foreground">{minCount}</span>
          </span>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            domain={["dataMin", "dataMax"]}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                formatter={(value) => [value, "Count"]}
              />
            }
          />
          <Bar dataKey="count" fill="red" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
