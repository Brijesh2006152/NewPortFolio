import './App.css';
import Header from './components/Header';
import Objective from './components/Objective';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectData from './data/ProjectData';

function App() {
  const web_developement = ["HTML5, CSS3, JavaScript", "Resposive Design and Mobile Friendly layouts", "React fundamentals and component based UI", "Clean Structure and Simple User interface0", "Best Coding Practices"]
  const python_programming = ["Python scripting and automation", "Problem-solving with Python", "GUI development basics with Tkinter", "Writing readable, efficient, and practical code"]
  const java_programming = ["Core Java programming", "Object-oriented programming concepts", "Console-based application development", "Practice with problem-solving and structured coding"]
  const C_programming = ["ANSI C fundamentals", "Variables, loops, functions, arrays, and recursion", "Debugging and error-handling practice ", "Strong focus on low-level programming logic and code understanding."]

  return (
    <div className="App">
      <Header />
      <Objective />

      <div className="section-head">Skills</div>
      <div className="skills-section">
        <SkillSection head="Web Development" body={web_developement}/>
        <SkillSection head="Python" body={python_programming}/>
        <SkillSection head="Java" body={java_programming}/>
        <SkillSection head="ANSI C" body={C_programming}/>
      </div>

      <div className="section-head">Project</div>
      <div className="projects-section">
        {/* <Projects project_name={projects[0]} body={project_description[0]} path={project_path[0]} />
        <Projects project_name={projects[1]} body={project_description[1]} path={project_path[1]} /> */}
        <Projects projectData={ProjectData} />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;