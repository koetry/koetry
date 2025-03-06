import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LettersForD from './screens/LettersForD';
import Smile from './screens/Smile';
import Spring from './screens/Spring';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/koetry/" element={<HomeScreen />} />
          <Route path="/koetry/letters_for_d" element={<LettersForD />} />
          <Route path="/koetry/letters_for_d/smile" element={<Smile />} />
          <Route path="/koetry/letters_for_d/spring" element={<Spring />} />
        </Routes>
      </div>
    </Router>
  );
}