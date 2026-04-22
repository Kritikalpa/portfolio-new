import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// 🥚 Developer Easter Egg
if (typeof window !== 'undefined') {
  setTimeout(() => {
    console.log(
      '%c 👋 Hey there, fellow dev! ',
      'background: linear-gradient(90deg, #6366f1, #a855f7); color: #fff; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 8px;'
    );
    console.log(
      '%c You found the easter egg. Have a cookie 🍪',
      'color: #84cc16; font-size: 13px; font-style: italic; padding: 4px;'
    );
    console.log(
      '%c Built by KritiKalpa Saha — I center divs for a living.',
      'color: #a855f7; font-size: 12px;'
    );
  }, 1000);
}

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
