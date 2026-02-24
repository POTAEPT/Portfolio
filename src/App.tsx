
import './App.css'
import ProfileSide from './component/ProfileSide'
import TechStack from './component/TechStack'
import AboutMe from './component/AboutMe'
import { Projects } from './component/Projects'
import { Education } from './component/Education'
import { Activities } from './component/Activities'
import { GithubStats } from './component/GithubStats'


function App() {
  return (
    <div>

      
      <div className="layout">

        <aside className="sidebar">
            <ProfileSide/>
            <Education />
            <Activities />
            <GithubStats />
        </aside>


        <main className="main-content">

          
           <div className='content-box'>
            <h2>About Me</h2>
            <AboutMe/>
          </div>

           <div className="content-box">
              <TechStack/>
           </div>
        </main>
      </div>
      <Projects />
    </div>
  )
}

export default App