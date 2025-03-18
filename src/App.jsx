import './App.css'
import Navbar from './components/Navbar'
import TypewriterText from './components/TypewriterText'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 px-4 pt-24 pb-8 max-w-7xl mx-auto w-full text-white relative">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
            <TypewriterText text="Welcome to My Portfolio" delay={50} />
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            I'm Shankar, a passionate developer crafting beautiful and functional web experiences.
          </p>
          <div className="flex justify-center gap-4 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-medium hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </main>

      {/* Other Sections */}
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
