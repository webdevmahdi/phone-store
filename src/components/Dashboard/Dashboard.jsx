import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from 'recharts';
import { ResponsiveContainer } from 'recharts';

const Dashboard = () => { 
  const data = [
  {
    name: 'January',
    expence: 4000,
    earning: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    expence: 3000,
    earning: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    expence: 2000,
    earning: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    expence: 2780,
    earning: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    expence: 1890,
    earning: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    expence: 2390,
    earning: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    expence: 3490,
    earning: 4300,
    amt: 2100,
  },
];
// users
const user = [
  { name: 'January', value: 42050 },
  { name: 'February', value: 30523 },
  { name: 'March', value: 35430 },
  { name: 'April', value: 20797 },
];

  return (
    <div>
       <LineChart width={700} height={400} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="earning" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expence" stroke="#82ca9d" />
        </LineChart>
        
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={user} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard