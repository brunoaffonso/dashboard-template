// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    link: 'https://www.youtube.com/watch?v=aTPkos3LKi8&t=13s',
    continuar: '24:00',
  });
}
