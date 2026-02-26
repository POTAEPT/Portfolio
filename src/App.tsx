
import './App.css'
import ProfileSide from './component/ProfileSide'
import TechStack from './component/TechStack'
import AboutMe from './component/AboutMe'
import Navbar from './component/Navbar'
import { Projects } from './component/Projects'
import { Education } from './component/Education'
import { Activities } from './component/Activities'


function App() {
  return (
    <div className="app-shell" id="home">

      <Navbar/>
      <div className="flow-layout">
        <div className="flow-item">
          <ProfileSide/>
        </div>
        <div className="flow-item flow-panel" id="about">
          <AboutMe/>
        </div>
        <div className="flow-item flow-panel">
          <TechStack/>
        </div>
        <div className="flow-item">
          <Education/>
        </div>
        <div className="flow-item">
          <Activities/>
        </div>
        <div className="flow-item" id="project">
          <Projects/>
        </div>
      </div>
    </div>
  )
}

export default App