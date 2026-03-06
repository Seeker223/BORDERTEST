import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.main`
  max-width: 920px;
  margin: 28px auto;
  padding: 0 16px;
`;

const Card = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 22px;
`;

const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.accent};
`;

export function SimplePage({ title, text }) {
  return (
    <Wrap>
      <Back to="/home">Back Home</Back>
      <Card>
        <h2>{title}</h2>
        <p>{text}</p>
      </Card>
    </Wrap>
  );
}
