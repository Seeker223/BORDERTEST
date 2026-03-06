import styled from 'styled-components';
import { AppFrame } from '../components/AppFrame';
import { topStories } from '../data/topStories';
import { videos } from '../data/videos';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
`;

const VideoCard = styled.article`
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
`;

const Frame = styled.div`
  height: 160px;
  background: linear-gradient(150deg, #222a49, #0f1325);
  display: grid;
  place-items: center;
  font-size: 2rem;
`;

const Meta = styled.div`
  padding: 10px 12px;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 6px 0 0;
    color: ${({ theme }) => theme.colors.mutetext};
    font-size: 0.85rem;
  }
`;

export function VideoPage() {
  return (
    <AppFrame title="Video" subtitle="Video feed migrated from static page" topItems={topStories}>
      <Grid>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <Frame>?</Frame>
            <Meta>
              <h3>{video.title}</h3>
              <p>{video.duration}</p>
            </Meta>
          </VideoCard>
        ))}
      </Grid>
    </AppFrame>
  );
}
