import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/shared/shadcn-ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@components/shared/shadcn-ui/chart';

const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
    { month: 'July', desktop: 50 },
    { month: 'August', desktop: 182 },
    { month: 'September', desktop: 200 },
    { month: 'October', desktop: 287 },
    { month: 'December', desktop: 108 },
];

const chartConfig = {
    desktop: {
        label: 'Coupon',
        color: '#6959DC',
    },
} satisfies ChartConfig;

export function OrdersTrendBarChart() {
    return (
        <Card>
            <CardHeader>
                <div className="text-heading-6 font-semi-bold text-neutral-10">Orders Trend</div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 10,
                        }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                            <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
