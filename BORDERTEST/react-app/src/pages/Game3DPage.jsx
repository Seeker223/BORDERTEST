import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';

const Card = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 20px;
  text-align: center;
  display: grid;
  gap: 8px;
`;

export function Game3DPage() {
  return (
    <AppFrame title="game 3d" subtitle="3D game route" topItems={null}>
      <Card>
        <h2>??? 3D game coming soon...</h2>
        <p>play, multiplayer mode, stream games</p>
      </Card>
    </AppFrame>
  );
}
