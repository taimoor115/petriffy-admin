"use client";

import { RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import useGetPostsCount from "../../../hooks/graphs/useGetPostsCount";

const chartConfig = {
  posts: {
    label: "Posts",
  },
  free: {
    label: "Free Posts",
    color: "blue", // Gray
  },
  silver: {
    label: "Silver Posts",
    color: "#C0C0C0", // Silver
  },
  gold: {
    label: "Gold Posts",
    color: "#FFD700", // Gold
  },
  diamond: {
    label: "Diamond Posts",
    color: "#B9F2FF", // Diamond/Platinum blue
  },
};

export default function SpiralPostsChart({ apiData = [] }) {
  // Create a map for easy lookup of counts by category
  const countMap = (apiData || []).reduce((acc, item) => {
    acc[item.category] = item.count;
    return acc;
  }, {});

  // Calculate total posts first
  const totalPosts = (apiData || []).reduce((sum, item) => sum + item.count, 0);

  // Create posts data with dynamic percentages
  const postsData = [
    {
      type: "FREE",
      posts: countMap["FREE"] || 0,
      fill: "blue",
      percentage:
        totalPosts > 0
          ? Math.round(((countMap["FREE"] || 0) / totalPosts) * 100)
          : 0,
    },
    {
      type: "SILVER",
      posts: countMap["SILVER"] || 0,
      fill: "#C0C0C0",
      percentage:
        totalPosts > 0
          ? Math.round(((countMap["SILVER"] || 0) / totalPosts) * 100)
          : 0,
    },
    {
      type: "GOLD",
      posts: countMap["GOLD"] || 0,
      fill: "#FFD700",
      percentage:
        totalPosts > 0
          ? Math.round(((countMap["GOLD"] || 0) / totalPosts) * 100)
          : 0,
    },
    {
      type: "DIAMOND",
      posts: countMap["DIAMOND"] || 0,
      fill: "#B9F2FF",
      percentage:
        totalPosts > 0
          ? Math.round(((countMap["DIAMOND"] || 0) / totalPosts) * 100)
          : 0,
    },
  ];

  return (
    <div className="px-2 mx-auto w-full max-w-4xl md:mx-0 md:p-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Posts Distribution
          </CardTitle>
          <CardDescription>
            Total Posts: {totalPosts.toLocaleString()} across all tiers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[400px]"
          >
            <RadialBarChart
              data={postsData}
              startAngle={90}
              endAngle={450}
              innerRadius={30}
              outerRadius={140}
            >
              {/* <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    nameKey="type"
                    formatter={(value, name) => {
                      const item = postsData.find((d) => d.type === name)
                      return [`${value} posts (${item?.percentage}%)`, name]
                    }}
                  />
                }
              /> */}
              <RadialBar dataKey="posts" background cornerRadius={4} />
            </RadialBarChart>
          </ChartContainer>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
            {postsData.map((item) => (
              <div key={item.type} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.type}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.posts.toLocaleString()} ({item.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="p-4 mt-6 bg-gray-50 rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div className="text-center">
                <div className="font-bold text-gray-600">
                  {postsData[0].posts}
                </div>
                <div className="text-gray-500">Free Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-400">
                  {postsData[1].posts}
                </div>
                <div className="text-gray-500">Silver Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-yellow-600">
                  {postsData[2].posts}
                </div>
                <div className="text-gray-500">Gold Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-blue-400">
                  {postsData[3].posts}
                </div>
                <div className="text-gray-500">Diamond Posts</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
