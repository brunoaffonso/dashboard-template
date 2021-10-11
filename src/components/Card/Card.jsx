import { CardDefault, CardTitle, CardBody } from './CardStyles';

export default function Card({ title, children }) {
  return (
    <>
      <CardDefault>
        <CardTitle>{title}</CardTitle>
        <CardBody>{children}</CardBody>
      </CardDefault>
    </>
  );
}
