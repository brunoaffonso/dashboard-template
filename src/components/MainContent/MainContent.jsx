import Card from '../Card/Card';
import { MainContainer } from './MainContentStyles';
import ChatsTest from '../_tests/ChatsTest';

export default function Main() {
  return (
    <MainContainer>
      <Card title="Card Title">Card Body</Card>
      {/* <Card title="Test Get Data">
        <TestApi></TestApi>
      </Card> */}
      <Card title="Chart">
        <ChatsTest></ChatsTest>
      </Card>
    </MainContainer>
  );
}
