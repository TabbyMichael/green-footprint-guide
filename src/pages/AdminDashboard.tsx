import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserManagement } from "@/components/admin/UserManagement";
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard";
import { OffsetProgramsManagement } from "@/components/admin/OffsetProgramsManagement";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Implement proper authentication check
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken");
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Login Required</h1>
            <p className="text-gray-600 mb-6">Please log in to access the admin dashboard.</p>
            <Button
              className="w-full"
              onClick={() => {
                // TODO: Implement proper login flow
                const dummyToken = "dummy-admin-token";
                localStorage.setItem("adminToken", dummyToken);
                setIsAuthenticated(true);
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem("adminToken");
              setIsAuthenticated(false);
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Carbon Footprints</h3>
            <p className="text-3xl font-bold">5,678</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Offset Programs</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity={0.9}/>
                      <stop offset="100%" stopColor="#22c55e" stopOpacity={0.9}/>
                    </linearGradient>
                    <linearGradient id="inactiveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f87171" stopOpacity={0.9}/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0.9}/>
                    </linearGradient>
                  </defs>
                  <Pie
                    data={[
                      { name: 'Active Users', value: 850 },
                      { name: 'Inactive Users', value: 384 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    <Cell fill="url(#activeGradient)" stroke="#22c55e" strokeWidth={1} />
                    <Cell fill="url(#inactiveGradient)" stroke="#ef4444" strokeWidth={1} />
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{
                      paddingTop: '20px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { month: 'Jan', users: 400, emissions: 240 },
                    { month: 'Feb', users: 500, emissions: 300 },
                    { month: 'Mar', users: 600, emissions: 320 },
                    { month: 'Apr', users: 750, emissions: 280 },
                    { month: 'May', users: 850, emissions: 250 }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <defs>
                    <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="emissionsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f87171" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b' }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    iconType="circle"
                    iconSize={10}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#4ade80"
                    strokeWidth={2}
                    dot={{ stroke: '#4ade80', strokeWidth: 2, fill: '#fff', r: 4 }}
                    activeDot={{
                      stroke: '#4ade80',
                      strokeWidth: 2,
                      fill: '#fff',
                      r: 6,
                      filter: 'drop-shadow(0 0 2px rgba(74, 222, 128, 0.4))'
                    }}
                    animationDuration={1500}
                    animationEasing="ease-out"
                    fill="url(#usersGradient)"
                  />
                  <Line
                    type="monotone"
                    dataKey="emissions"
                    stroke="#f87171"
                    strokeWidth={2}
                    dot={{ stroke: '#f87171', strokeWidth: 2, fill: '#fff', r: 4 }}
                    activeDot={{
                      stroke: '#f87171',
                      strokeWidth: 2,
                      fill: '#fff',
                      r: 6,
                      filter: 'drop-shadow(0 0 2px rgba(248, 113, 113, 0.4))'
                    }}
                    animationDuration={1500}
                    animationEasing="ease-out"
                    fill="url(#emissionsGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <nav className="flex space-x-4 mb-8">
          <Link
            to="/admin/users"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Users
          </Link>
          <Link
            to="/admin/analytics"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Analytics
          </Link>
          <Link
            to="/admin/programs"
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Offset Programs
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<AnalyticsDashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/programs" element={<OffsetProgramsManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;