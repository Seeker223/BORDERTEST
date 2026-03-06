import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';

const Card = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 20px;
  text-align: center;
`;

export function CallPage() {
  return (
    <AppFrame title="call" subtitle="Call route" topItems={null}>
      <Card>
        <h2>?? no call at the moment...</h2>
      </Card>
    </AppFrame>
  );
}
