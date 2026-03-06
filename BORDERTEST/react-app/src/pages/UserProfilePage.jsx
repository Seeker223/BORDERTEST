import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';
import { topStories } from '../data/topStories';

const Card = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 18px;
  display: grid;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: linear-gradient(150deg, #2e3560, #161b32);
  display: grid;
  place-items: center;
  font-size: 1.9rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Pill = styled.div`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.colors.mutetext};
`;

export function UserProfilePage() {
  return (
    <AppFrame title="ZT sambad" subtitle="User profile route" topItems={topStories}>
      <Card>
        <Avatar>??</Avatar>
        <h2>happi-heydayz</h2>
        <Stats>
          <Pill>12 posts</Pill>
          <Pill>1k followers</Pill>
          <Pill>15k following</Pill>
        </Stats>
        <p>
          This profile page is now componentized under React routing and styled-components.
          Continue migration by replacing placeholder data with API-driven profile data.
        </p>
      </Card>
    </AppFrame>
  );
}
