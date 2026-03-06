import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
`;

export function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate('/home', { replace: true }), 1200);
    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <Wrap>
      <div>
        <h1>hender xender</h1>
        <p>powered by needforsoftwares</p>
      </div>
    </Wrap>
  );
}
