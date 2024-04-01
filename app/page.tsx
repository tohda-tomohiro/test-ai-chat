import { Container } from '@chakra-ui/react';
import { Chat } from './_components/Chat';

export default function Home() {
  return (
    <>
      <Container py="8">
        <Chat />
      </Container>
    </>
  );
}
