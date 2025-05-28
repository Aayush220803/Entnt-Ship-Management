import React from 'react';
import {
  LineChart, Line,
  BarChart, Bar,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Default demo data (fallback)
const defaultData = [
  { name: 'Jan', Ships: 10, Jobs: 5 },
  { name: 'Feb', Ships: 12, Jobs: 8 },
  { name: 'Mar', Ships: 14, Jobs: 6 },
  { name: 'Apr', Ships: 11, Jobs: 10 },
  { name: 'May', Ships: 16, Jobs: 12 },
];

const Charts = ({ data }) => {
  const chartData = (data && data.length) ? data : defaultData;

  return (
    <div className="card">
      <h3>Monthly Overview</h3>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ships" fill="#8884d8" />
            <Bar dataKey="Jobs" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Ships" stroke="#8884d8" />
            <Line type="monotone" dataKey="Jobs" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
