
import './App.css'
import ProfileSide from './component/ProfileSide'
import TechStack from './component/TechStack'
import AboutMe from './component/AboutMe'
import Navbar from './component/Navbar'
import { Projects } from './component/Projects'
import { Education } from './component/Education'
import { Activities } from './component/Activities'
import { GithubStats } from './component/GithubStats'


function App() {
  return (
    <div className="app-shell" id="home">

      <Navbar/>
      <div className="layout">
        <aside className="sidebar">
          <ProfileSide/>
          <Education/>
          <Activities/>
        </aside>
        <main className="main-content">
          <section className="content-box" id="about">
            <AboutMe/>
          </section>
          <section className="content-box">
            <TechStack/>
          </section>
        </main>
      </div>
      <section className="projects-wrap" id="project">
        <Projects/>
      </section>
    </div>
  )
}

export default App