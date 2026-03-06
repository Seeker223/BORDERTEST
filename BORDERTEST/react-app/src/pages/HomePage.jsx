import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { feedPosts } from '../data/feedPosts';
import { rightRailItems } from '../data/rightRailItems';
import { topStories } from '../data/topStories';
import { useOffrolling } from '../hooks/useOffrolling';
import { Feed } from '../components/Feed';
import { RightRail } from '../components/RightRail';
import { AppFrame } from '../components/AppFrame';

const Grid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);
  gap: 14px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $active, theme }) => ($active ? theme.colors.accent2 : theme.colors.panel)};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
`;

export function HomePage() {
  const [filter, setFilter] = useState('status');
  const [offrollStamp, setOffrollStamp] = useState('');
  const [top, setTop] = useState(topStories);
  const [right, setRight] = useState(rightRailItems);

  const filteredRight = useMemo(
    () => right.filter((item) => item.category === filter),
    [filter, right],
  );

  const { onScroll } = useOffrolling({
    rightItems: filteredRight,
    topItems: top,
    onCycle: ({ rightHead, topHead }) => {
      setRight((prev) => [...prev.slice(1), prev[0]]);
      setTop((prev) => [...prev.slice(1), prev[0]]);
      setOffrollStamp(`Moved ${rightHead.label} with ${topHead.title} into feed cycle.`);
    },
  });

  return (
    <AppFrame title="home" subtitle="Offrolling active" topItems={top}>
      <FilterRow>
        {['status', 'stato', 'utilities', 'apps'].map((value) => (
          <FilterButton
            key={value}
            type="button"
            $active={filter === value}
            onClick={() => setFilter(value)}
          >
            {value}
          </FilterButton>
        ))}
      </FilterRow>

      <Grid>
        <Feed posts={feedPosts} offrollStamp={offrollStamp} />
        <RightRail items={filteredRight} onScroll={onScroll} />
      </Grid>
    </AppFrame>
  );
}
