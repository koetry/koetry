import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  // background-color: #282c34;
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/koetry/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}