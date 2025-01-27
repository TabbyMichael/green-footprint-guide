import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AnalyticsData = {
  totalCarbonFootprint: number;
  averagePerUser: number;
  monthlyReduction: number;
  topOffsetPrograms: Array<{
    name: string;
    participants: number;
    impact: number;
  }>;
  recentActivity: Array<{
    id: string;
    user: string;
    action: string;
    date: string;
    impact: number;
  }>;
};

const mockData: AnalyticsData = {
  totalCarbonFootprint: 125789.5,
  averagePerUser: 10.2,
  monthlyReduction: 15.8,
  topOffsetPrograms: [
    { name: "Tree Planting Initiative", participants: 234, impact: 567.8 },
    { name: "Solar Panel Project", participants: 189, impact: 432.1 },
    { name: "Wind Energy Support", participants: 156, impact: 389.5 },
  ],
  recentActivity: [
    {
      id: "1",
      user: "John Doe",
      action: "Carbon Footprint Calculated",
      date: "2024-01-20",
      impact: 12.5,
    },
    {
      id: "2",
      user: "Jane Smith",
      action: "Joined Offset Program",
      date: "2024-01-19",
      impact: 8.3,
    },
  ],
};

export const AnalyticsDashboard = () => {
  const [data] = useState<AnalyticsData>(mockData);

  const exportToCSV = () => {
    const csvContent = [
      ['Metric', 'Value'],
      ['Total Carbon Footprint (tons)', data.totalCarbonFootprint],
      ['Average per User (tons)', data.averagePerUser],
      ['Monthly Reduction (%)', data.monthlyReduction],
      ['\nTop Offset Programs'],
      ['Program Name', 'Participants', 'Impact (tons)'],
      ...data.topOffsetPrograms.map(program => [
        program.name,
        program.participants,
        program.impact
      ]),
      ['\nRecent Activity'],
      ['User', 'Action', 'Date', 'Impact (tons)'],
      ...data.recentActivity.map(activity => [
        activity.user,
        activity.action,
        activity.date,
        activity.impact
      ])
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `analytics_report_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <Button variant="outline" onClick={exportToCSV}>Export Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Carbon Footprint</CardTitle>
            <CardDescription>Across all users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.totalCarbonFootprint.toLocaleString()} tons</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average per User</CardTitle>
            <CardDescription>Carbon footprint</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data.averagePerUser} tons</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Reduction</CardTitle>
            <CardDescription>Average improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">-{data.monthlyReduction}%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Offset Programs</CardTitle>
            <CardDescription>By impact and participation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topOffsetPrograms.map((program, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{program.name}</p>
                    <p className="text-sm text-gray-500">{program.participants} participants</p>
                  </div>
                  <p className="font-bold">{program.impact} tons</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentActivity.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                  <p className="font-bold">{activity.impact} tons</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};