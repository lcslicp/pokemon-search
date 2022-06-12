import './index.css';

//components
import Intro from './components/intro';
import SelectedWorks from './components/Selectedworks';
import Contact from './components/Contact';
import BgAnimation from './components/BgAnimation';
import Sidebar from './components/SideBar';

function App() {

  return (
    <div>
      <Sidebar />
      <Intro />
      <SelectedWorks />
      <Contact />
      <BgAnimation />

    </div>
  )
}

export default App
