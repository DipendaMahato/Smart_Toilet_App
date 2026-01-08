'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle, ReferenceLine } from 'recharts';

const data = [
  { name: 'JAN', value: 12 },
  { name: 'FEB', value: 15 },
  { name: 'MAR', value: 20 },
  { name: 'APR', value: 18 },
  { name: 'MAY', value: 25 },
  { name: 'JUN', value: 22 },
  { name: 'JUL', value: 30 },
  { name: 'AUG', value: 28 },
  { name: 'SEP', value: 35 },
  { name: 'OCT', value: 32 },
];

const CustomTooltip = (props: any) => {
    if (props.active && props.payload && props.payload.length) {
        return (
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-2 text-sm shadow-lg">
                <p className="font-semibold text-foreground">{`Month: ${props.label}`}</p>
                <p style={{ color: '#c084fc' }}>{`Urine pH: ${props.payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export function UrinePhTrendChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--primary) / 0.1)' }} />
          <defs>
            <linearGradient id="phGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="#c084fc" strokeWidth={3} fill="url(#phGradient)" />
          <ReferenceLine y={24} stroke="hsl(var(--status-green))" strokeDasharray="4 4" />
          <ReferenceLine y={36} stroke="hsl(var(--status-green))" strokeDasharray="4 4" />
          <ReferenceArea y1={24} y2={36} fill="hsl(var(--status-green) / 0.1)" />
        </AreaChart>
      </ResponsiveContainer>
       <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground mt-2">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#c084fc'}} />
            <span>Urine pH</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-status-green/30" />
            <span>Ideal pH Range (6.0-7.5)</span>
         </div>
      </div>
    </div>
  );
}

const ReferenceArea = (props: any) => {
    const { y1, y2, ...rest } = props;
    if (y1 === undefined || y2 === undefined) return null;
    return <Rectangle {...rest} y={y2} height={y1-y2} />;
};