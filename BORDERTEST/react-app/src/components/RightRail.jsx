import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Rail = styled.aside`
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.panel};
  max-height: 520px;
  overflow-y: auto;
  padding: 8px;
  display: grid;
  gap: 8px;
`;

const Card = styled(Link)`
  background: ${({ theme }) => theme.colors.panelSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.span`
  font-size: 1.1rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
`;

export function RightRail({ items, onScroll }) {
  return (
    <Rail onScroll={onScroll}>
      {items.map((item) => (
        <Card key={item.id} to={item.to}>
          <Icon>{item.icon}</Icon>
          <Label>{item.label}</Label>
        </Card>
      ))}
    </Rail>
  );
}
