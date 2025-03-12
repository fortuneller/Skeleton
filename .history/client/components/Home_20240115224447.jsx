import BBG from '../src/assets/BBG.jpeg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Welcome to my site,</span><br/>
          <span className="introText">En <span className="introName">Blessing Ajiboye</span> 
          <img src={BBG} alt="profile" className="bbg" width="750" height="750" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" /></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    