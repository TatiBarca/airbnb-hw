import './App.css';
import { Experience } from './ExperienceSection';
import { Heroes } from './HeroesSection';
import { Navbar } from './Navbar';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Heroes />
      <Experience />
    </div>
  );
}

export default App;
