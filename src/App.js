import './App.css';
import Header from './components/Header';
import Objective from './components/Objective';
import SkillSection from './components/SkillSection';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  let skills_content = [
    "HTML5, CSS3, JavaScript | Responsive design and mobile-friendly layouts | React fundamentals and component-based UI development | Clean structure, simple user interface design, and best coding practices.",
    "Python scripting and automation | Problem-solving with Python | GUI development basics with Tkinter | Writing readable, efficient, and practical code",
    "Core Java programming | Object-oriented programming concepts | Console-based application development | Practice with problem-solving and structured coding",
    "ANSI C fundamentals | Variables, loops, functions, arrays, and recursion | Debugging and error-handling practice | Strong focus on low-level programming logic and code understanding."
  ]
  let projects = ["Clone of Website", "GUI Calculator"]
  let project_description = [
    "I developed a website clone of Abstract using only HTML and CSS, focusing on replicating its layout, typography, and visual structure. The project involved carefully analyzing the original site’s design and then recreating its sections—such as the header, hero, content blocks, and footer—using semantic HTML and clean CSS. I paid close attention to spacing, colors, fonts, and responsive behavior to ensure the layout adapts smoothly across different screen sizes. This project helped me strengthen my understanding of modern layout techniques, responsive design principles, and writing organized, maintainable HTML and CSS code.",
    "I developed a simple GUI calculator using only the tkinter library in Python, without applying object‑oriented programming. The project focuses on building a clean, interactive interface where users can perform basic arithmetic operations like addition, subtraction, multiplication, and division by clicking buttons. This project helped me strengthen my understanding of GUI programming while practicing clear layout and user‑friendly behavior."
  ]
  let project_path = [
    "https://website-clone-zeta-neon.vercel.app/",
    "https://github.com/Brijesh2006152/projects/tree/main/python"
  ]
  return (
    <div className="App">
      <Header />
      <Objective />

      <div className="section-head">Skills</div>
      <div className="skills-section">
        <SkillSection head="Web Development" body={skills_content[0]}/>
        <SkillSection head="Python" body={skills_content[1]}/>
        <SkillSection head="Java" body={skills_content[2]}/>
        <SkillSection head="ANSI C" body={skills_content[3]}/>
      </div>

      <div className="section-head">Project</div>
      <div className="projects-section">
        <Projects project_name={projects[0]} body={project_description[0]} path={project_path[0]} />
        <Projects project_name={projects[1]} body={project_description[1]} path={project_path[1]} />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
