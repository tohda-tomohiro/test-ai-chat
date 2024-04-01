'use client';
import { Button, FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';

export function Chat() {
  const [userMessage, setUserMessage] = useState('');
  const { messages, append } = useChat({
    api: '/api/chat',
  });
  let count = 0;

  useEffect(() => {
    if (count === 0) {
      // 開発モードでの二重実行を防ぐ
      append({ role: 'user', content: '私と一緒に英語の勉強をしましょう！' });
      count++;
    }
  }, []);

  const clickHandler = () => {
    append({ role: 'user', content: userMessage });
    setUserMessage('');
  };

  return (
    <>
      <Box mb="5">
        {messages.map(
          (message, index) =>
            index !== 0 && (
              <Box key={message.id} my="3">
                {message.role === 'user' ? 'User: ' : 'AI: '}
                {message.content}
              </Box>
            )
        )}
      </Box>

      <FormControl>
        <FormLabel>Message</FormLabel>
        <Input
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
      </FormControl>
      <Button onClick={clickHandler} mt="2" colorScheme="teal">
        Send
      </Button>
    </>
  );
}
