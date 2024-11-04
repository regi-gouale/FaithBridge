import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell, Calendar, MessageSquare, Users, Lock } from "lucide-react";
import React from "react";

export default function DashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden p-6">
      <h1 className="mb-6 font-heading text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Member Overview</CardTitle>
            <CardDescription>Quick stats on church members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Members</span>
                <span className="text-2xl font-bold">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">New This Month</span>
                <span className="text-2xl font-bold text-green-600">+42</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Small Groups</span>
                <span className="text-2xl font-bold">78</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Interviews</CardTitle>
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Small Group Leaders</p>
                  <p className="text-sm text-gray-500">Tomorrow, 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Users className="size-5" />
                </div>
                <div>
                  <p className="font-medium">New Members Orientation</p>
                  <p className="text-sm text-gray-500">Saturday, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Pastoral Care Team</p>
                  <p className="text-sm text-gray-500">Monday, 2:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reminders & Notifications</CardTitle>
            <CardDescription>Your upcoming tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Lock className="size-5 text-yellow-500" />
                  <span className="font-medium">Follow-up: New Visitors</span>
                </div>
                <Button size="sm">Mark Complete</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="size-5 text-red-500" />
                  <span className="font-medium">Volunteer Schedule Due</span>
                </div>
                <Button size="sm">View Schedule</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="size-5 text-blue-500" />
                  <span className="font-medium">Plan Next Month's Events</span>
                </div>
                <Button size="sm">Start Planning</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Spiritual Growth Visualization */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Spiritual Growth Trends</CardTitle>
          <CardDescription>
            Tracking member engagement and growth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-[200px] w-full items-center justify-center bg-gray-100">
            <p className="text-gray-500">
              Placeholder for Spiritual Growth Chart
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
