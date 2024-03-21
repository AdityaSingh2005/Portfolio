import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Testimonials from './components/Testimonials/testimonials';
import Resume from './components/Resume/resume';

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Intro/>
      <Skills/>
      <Resume/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
