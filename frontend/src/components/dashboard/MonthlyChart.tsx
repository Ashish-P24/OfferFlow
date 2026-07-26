import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type {
  MonthlyApplication,
} from "@/types/analytics";

interface MonthlyChartProps {
  data: MonthlyApplication[];
}

export default function MonthlyChart({
  data,
}: MonthlyChartProps) {

  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Monthly Applications
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}