import BBG from '../src/assets/BBG.jpeg';
import hire from '../src/assets/BBG.jpeg';
export default function Home() {
     return <>
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I am <span className="introName">Blessing Ajiboye</span> <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>
          <Link><button className="btn"><img src={btnImg} alt="Hire me"/>Hire Me</button></Link>
          <img src={BBG} alt="profile" className="bbg" />
          </div>
     </section>
    

     </>
     }
    