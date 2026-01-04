"use client"

import { Line, LineChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts"
import { ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { day: "Mon", heartRate: 75, hydration: 90 },
  { day: "Tue", heartRate: 72, hydration: 85 },
  { day: "Wed", heartRate: 78, hydration: 92 },
  { day: "Thu", heartRate: 74, hydration: 88 },
  { day: "Fri", heartRate: 70, hydration: 95 },
  { day: "Sat", heartRate: 80, hydration: 82 },
  { day: "Sun", heartRate: 76, hydration: 91 },
]

export function RealTimeChart() {
  return (
    <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="day"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ stroke: "hsl(var(--accent))", strokeWidth: 2, strokeDasharray: "3 3" }}
              content={<ChartTooltipContent />}
              wrapperStyle={{ outline: 'none' }}
              contentStyle={{ 
                background: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              name="Heart Rate (bpm)"
            />
            <Line
              type="monotone"
              dataKey="hydration"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={false}
              name="Hydration (%)"
            />
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
