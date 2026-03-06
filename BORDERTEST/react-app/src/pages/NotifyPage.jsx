import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';
import { notifications } from '../data/notifications';
import { topStories } from '../data/topStories';

const List = styled.section`
  display: grid;
  gap: 10px;
`;

const Item = styled.article`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
`;

const Time = styled.span`
  color: ${({ theme }) => theme.colors.mutetext};
  font-size: 0.82rem;
`;

export function NotifyPage() {
  return (
    <AppFrame title="notification" subtitle="Knocktifications" topItems={topStories}>
      <List>
        {notifications.map((n) => (
          <Item key={n.id}>
            <Text>
              <strong>{n.who}</strong> {n.text}
            </Text>
            <Time>{n.when}</Time>
          </Item>
        ))}
      </List>
    </AppFrame>
  );
}
