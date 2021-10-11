import { ButtonTest, ListData, ListItem } from './TestStyles';
import { getDataDiracWeb, getDataFake } from '../../api/api';
import React from 'react';

export default function TestApi2() {
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);

  async function handleClick(e) {
    e.preventDefault();
    console.log(await getDataFake());
    console.log(await getDataDiracWeb());
  }

  const getData = async () => {
    const res = await getDataFake();
    const res2 = await getDataDiracWeb();
    setData(res);
    setData2(res2);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ButtonTest onClick={(e) => handleClick(e)}>GetData</ButtonTest>
      <ListData>
        {data.slice(0, 5).map((item, index) => (
          <ListItem key={index}>
            <div>Data: {item.date}</div>
            <div>Valor: {item.money}</div>
            <div>#: {item.number}</div>
            <div>Cidade: {item.city}</div>
            <div>Tamanho: {item.size}</div>
          </ListItem>
        ))}
      </ListData>
      <ListData>
        {data2.slice(0, 5).map((item, index) => (
          <ListItem key={index}>
            <div>OS: {item.id_ordem_servico}</div>
            <div>Tipo Serviço: {item.id_tipo_servico}</div>
            <div>Setor: {item.setor}</div>
            <div>Pavilhão: {item.id_pavilhao}</div>
            <div>Descrição: {item.descricao}</div>
            <div>Data: {item.data}</div>
            <div>Situação: {item.situacao}</div>
          </ListItem>
        ))}
      </ListData>
    </>
  );
}
