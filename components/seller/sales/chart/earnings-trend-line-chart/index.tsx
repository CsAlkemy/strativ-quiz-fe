import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader } from '@components/shared/shadcn-ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@components/shared/shadcn-ui/chart';

const chartData = [
    { month: 'Jan', earnings: 10, withdrawals: 40 },
    { month: 'Feb', earnings: 35, withdrawals: 30 },
    { month: 'Mar', earnings: 20, withdrawals: 25 },
    { month: 'Apr', earnings: 25, withdrawals: 35 },
    { month: 'May', earnings: 30, withdrawals: 20 },
    { month: 'Jun', earnings: 15, withdrawals: 25 },
    { month: 'Jul', earnings: 10, withdrawals: 30 },
    { month: 'Aug', earnings: 25, withdrawals: 40 },
    { month: 'Sep', earnings: 40, withdrawals: 25 },
    { month: 'Oct', earnings: 30, withdrawals: 20 },
    { month: 'Nov', earnings: 25, withdrawals: 30 },
    { month: 'Dec', earnings: 20, withdrawals: 35 },
];

const chartConfig = {
    desktop: {
        label: 'Earnings Trend',
        color: '#4834D4',
    },
    mobile: {
        label: 'Withdrawals Trend',
        color: '#EE5253',
    },
} satisfies ChartConfig;

export function EarningsTrendLineChart() {
    return (
        <Card>
            <CardHeader>
                <div className="text-heading-6 font-semi-bold text-neutral-10">Earnings Trend</div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={0} />
                        <YAxis domain={[0, 50]} tickLine={false} axisLine={false} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line dataKey="earnings" type="bump" stroke={chartConfig.desktop.color} strokeWidth={2} dot={false} />
                        <Line dataKey="withdrawals" type="bump" stroke={chartConfig.mobile.color} strokeWidth={2} dot={false} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
