import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';
import { messages } from '../data/messages';

const List = styled.section`
  display: grid;
  gap: 10px;
`;

const Row = styled.article`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dot = styled.span`
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.accent2};
  font-size: 0.8rem;
`;

export function MessagesPage() {
  return (
    <AppFrame title="messages" subtitle="Message list route" topItems={null}>
      <List>
        {messages.map((message) => (
          <Row key={message.id}>
            <div>
              <strong>{message.name}</strong>
              <p>{message.preview}</p>
            </div>
            {message.unread > 0 ? <Dot>{message.unread}</Dot> : null}
          </Row>
        ))}
      </List>
    </AppFrame>
  );
}
