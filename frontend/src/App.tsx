// src/App.tsx
import './App.css';
import ProfileSide from './component/ProfileSide'
import TechStack from './component/TechStack'
import Navbar from './component/Navbar'
import { Projects } from './component/Projects'
import { Activities } from './component/Activities'

function App() {
  return (
    <div className="app-shell">
      <Navbar/>
      {/* เปลี่ยนจาก flow-layout เป็น snap-container */}
      <div className="snap-container">
        <section className="snap-section" id="home">
          <ProfileSide/>
        </section>

        <section className="snap-section" id="tech">
          <div className="flow-panel">
            <TechStack/>
          </div>
        </section>

        <section className="snap-section" id="project">
          <Projects/>
        </section>
      </div>
    </div>
  )
}

export default App