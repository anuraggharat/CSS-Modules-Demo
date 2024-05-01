import styles from './App.module.css'
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
