import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface StatusChartProps {
  applied: number;
  interview: number;
  offer: number;
  rejected: number;
}

const COLORS = [
  "#3b82f6",
  "#f59e0b",
  "#22c55e",
  "#ef4444",
];

export default function StatusChart({
  applied,
  interview,
  offer,
  rejected,
}: StatusChartProps) {

  const data = [
    {
      name: "Applied",
      value: applied,
    },
    {
      name: "Interview",
      value: interview,
    },
    {
      name: "Offer",
      value: offer,
    },
    {
      name: "Rejected",
      value: rejected,
    },
  ];

  return (
    <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Applications by Status
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >

              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}