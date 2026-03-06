import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SimplePage } from './pages/SimplePage';
import { SplashPage } from './pages/SplashPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/video" element={<SimplePage title="Video" text="Video feed page migrated to React layout." />} />
      <Route path="/user-profile" element={<SimplePage title="User Profile" text="Profile page moved into React route architecture." />} />
      <Route path="/notify" element={<SimplePage title="Notifications" text="Notification center route in React." />} />
      <Route path="/call" element={<SimplePage title="Call" text="No call at the moment." />} />
      <Route path="/game" element={<SimplePage title="Game" text="Game page route in React." />} />
      <Route path="/game-3d" element={<SimplePage title="3D Game" text="3D game route in React." />} />
      <Route path="/recents" element={<SimplePage title="Recents" text="Recents route in React." />} />
      <Route path="/msg" element={<SimplePage title="Messages" text="Messages route in React." />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
