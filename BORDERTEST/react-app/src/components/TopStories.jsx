import styled from 'styled-components';

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(60px, 1fr));
  gap: 10px;
`;

const Story = styled.div`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 10px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Avatar = styled.div`
  font-size: 1.2rem;
`;

const Label = styled.p`
  margin: 6px 0 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutetext};
`;

export function TopStories({ items }) {
  return (
    <Strip>
      {items.map((item) => (
        <Story key={item.id}>
          <Avatar>{item.avatar}</Avatar>
          <Label>{item.title}</Label>
        </Story>
      ))}
    </Strip>
  );
}
