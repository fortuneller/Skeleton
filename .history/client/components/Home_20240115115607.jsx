import BBG from '../src/assets/BBG.jpeg';
export default function Home() {
     return <>
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I am <span className="introName">Blessing Ajiboye</span> <br/>Website Designer</span>
          <></>
          </div>
     </section>
     <p>Hello World!</p>
     <img src={BBG} alt="profile" className="bbg" />

     </>
     }
    