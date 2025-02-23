import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 40, pv: 24, amt: 2400 },
  { name: 'Feb', uv: 30, pv: 13, amt: 2210 },
  { name: 'Mar', uv: 20, pv: 98, amt: 2290 },
  { name: 'Apr', uv: 27, pv: 39, amt: 2000 },
  { name: 'May', uv: 18, pv: 48, amt: 2181 },
  { name: 'Jun', uv: 23, pv: 38, amt: 2500 },
  { name: 'Jul', uv: 34, pv: 43, amt: 2100 },
];

const Statistics = () => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth > 768 ? 730 : window.innerWidth - 40);

  useEffect(() => {
    document.title = 'Statistics | Gadget Heaven';

    const handleResize = () => {
      setChartWidth(window.innerWidth > 768 ? 730 : window.innerWidth - 40);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="hero bg-[#9538E2] min-h-screen relative">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <h1 className="text-5xl font-bold text-white">Statistics</h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 md:max-w-4xl flex flex-col justify-center items-center mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Monthly Data Chart</h2>
        <AreaChart
          width={chartWidth}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;