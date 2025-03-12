import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project5 from '../src/assets/project5.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span> 
          <div className="worksImgs">
                   <img src={project1} alt="project1" className="worksImg" />
                   <img src={project2} alt="project2" className="worksImg" />
                   <img src={project3} alt="project3" className="worksImg" />
                   <img src={project4} alt="project4" className="worksImg" />
                   <img src={project5} alt="project5" className="worksImg" />
                   <img src={project6} alt="project6" className="worksImg" />
                  
               
               </div>

          
                  
                  
     </section>
    

     </>
    }
    