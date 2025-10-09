import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const RatingChart = ({ ratings }) => {
  if (!ratings || ratings.length === 0) {
    return <p className="text-center text-gray-500 py-10">No rating data available.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Ratings</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ratings}>
          <XAxis dataKey="name" stroke="#555" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#4F46E5" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
