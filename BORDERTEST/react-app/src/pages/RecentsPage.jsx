import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';
import { videos } from '../data/videos';

const Reel = styled.section`
  display: grid;
  gap: 10px;
`;

const Clip = styled.article`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export function RecentsPage() {
  return (
    <AppFrame title="recents" subtitle="Recent video activity" topItems={null}>
      <Reel>
        {videos.slice(0, 4).map((video) => (
          <Clip key={video.id}>
            <span>?? {video.title}</span>
            <span>{video.duration}</span>
          </Clip>
        ))}
      </Reel>
    </AppFrame>
  );
}
