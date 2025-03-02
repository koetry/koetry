import Background from './components/Background';
import Header from './components/Header';
import Navigation from './components/Navigation';

export default function App() {
  // npm run deploy
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Header/>
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* <AsciiBackground /> */}
        <Background/>
        <Navigation/>
      </main>
    </div>    
  );
}