import axios from 'axios';

export async function getDataFake() {
  const res = await axios.get(
    'https://mocki.io/v1/d8228d05-4b68-46a2-bf68-a3ba0e41cd3a',
    {
      params: {
        limit: 10,
      },
    }
  );
  return res.data;
}

export async function getDataDiracWeb() {
  const res = await axios.get(
    'https://mocki.io/v1/8ed3c04e-7f02-4ae4-8957-bcf35c884205'
  );
  return res.data;
}
