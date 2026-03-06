import styled from 'styled-components';

const Wrap = styled.section`
  display: grid;
  gap: 12px;
`;

const Post = styled.article`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 16px;
`;

const Meta = styled.div`
  color: ${({ theme }) => theme.colors.mutetext};
  font-size: 0.85rem;
  margin-bottom: 8px;
`;

const Body = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const OffrollChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(75, 123, 236, 0.16);
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: 6px 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.mutetext};
`;

export function Feed({ posts, offrollStamp }) {
  return (
    <Wrap>
      {posts.map((post) => (
        <Post key={post.id} className="post-zone">
          <h3>{post.title}</h3>
          <Meta>{post.author}</Meta>
          <Body>{post.body}</Body>
          <OffrollChip>{post.likes} • {post.meta}</OffrollChip>
        </Post>
      ))}
      {offrollStamp ? (
        <Post>
          <h3>Offrolling Event</h3>
          <Body>{offrollStamp}</Body>
        </Post>
      ) : null}
    </Wrap>
  );
}
