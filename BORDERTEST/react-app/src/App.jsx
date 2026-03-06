import { Navigate, Route, Routes } from 'react-router-dom';
import { SplashPage } from './pages/SplashPage';
import { HomePage } from './pages/HomePage';
import { VideoPage } from './pages/VideoPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NotifyPage } from './pages/NotifyPage';
import { CallPage } from './pages/CallPage';
import { GamePage } from './pages/GamePage';
import { Game3DPage } from './pages/Game3DPage';
import { RecentsPage } from './pages/RecentsPage';
import { MessagesPage } from './pages/MessagesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="/notify" element={<NotifyPage />} />
      <Route path="/call" element={<CallPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/game-3d" element={<Game3DPage />} />
      <Route path="/recents" element={<RecentsPage />} />
      <Route path="/msg" element={<MessagesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
