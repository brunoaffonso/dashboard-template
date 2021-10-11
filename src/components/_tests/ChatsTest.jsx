import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import React from 'react';
import { getDataFake } from '../../api/api';

export default function ChatsTest() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const res = await getDataFake();
    setData(res);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <LineChart
        width={900}
        height={500}
        data={data.slice(0, 10)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="number" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}
