import React from 'react';
import Page from '../../components/Page';
import Text from '../../components/Text';
import Card from '../../components/Card';
import { ProgressBar } from '@shopify/polaris';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';


//example data
const taskData = [
  { name: 'Peter', time: 6 },
  { name: 'Mary', time: 7 },
  // ... 기타 데이터
];

const workloadData = [
  { name: 'Central', value: 55 },
  { name: 'Western', value: 15 },
  { name: 'Reserve', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <Page>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ProgressBar progress={75} size="small" />
          <Text as='p'>Receiving Complete</Text>
        </div>
        {/* ... 추가적인 ProgressBar 컴포넌트 */}
      </Card>
      <Card >
        <BarChart width={600} height={300} data={taskData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
      </Card>
      <Card>
        <PieChart width={400} height={400}>
          <Pie
            data={workloadData}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {workloadData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Card>
      {/* ... 기타 필요한 차트 및 컴포넌트 */}
    </Page>
  );
};

export default Dashboard;