import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CatchingYourEyes from './screens/CatchingYourEyes';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/koetry/" element={<HomeScreen />} />
          <Route path="/koetry/catching_your_eyes" element={<CatchingYourEyes />} />
        </Routes>
      </div>
    </Router>
  );
}