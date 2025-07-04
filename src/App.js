import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import VideoSection from './components/VideoSection';
import GuideContent from './components/GuideContent';

function App() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <VideoSection />
      <GuideContent />
    </div>
  );
}

export default App;
