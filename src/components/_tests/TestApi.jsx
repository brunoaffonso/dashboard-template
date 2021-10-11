import { ButtonTest, ListData, ListItem } from './TestStyles';
import { getDataFake } from '../../api/api';
import React from 'react';

export default function TestApi() {
  const [data, setData] = React.useState([]);

  async function handleClick(e) {
    e.preventDefault();
    console.log(await getDataFake());
  }

  const getData = async () => {
    const res = await getDataFake();
    setData(res);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ButtonTest onClick={(e) => handleClick(e)}>GetData</ButtonTest>
      <ListData>
        {data.map((item, index) => (
          <ListItem key={index}>
            <div>Data: {item.date}</div>
            <div>Data: {item.money}</div>
            <div>Data: {item.number}</div>
            <div>Data: {item.city}</div>
            <div>Data: {item.number}</div>
            <div>Data: {item.size}</div>
            <div>Data: {item.boolean}</div>
          </ListItem>
        ))}
      </ListData>
    </>
  );
}
