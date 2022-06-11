import './index.css';

//components
import Intro from './components/intro';
import SelectedWorks from './components/Selectedworks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BgAnimation from './components/BgAnimation';

function App() {

  return (
    <div>
      <Intro />
      <SelectedWorks />
      <Contact />
      <Footer />
      <BgAnimation />

    </div>
  )
}

export default App
