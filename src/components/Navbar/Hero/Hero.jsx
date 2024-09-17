import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
   
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experience That Inspire</h2>
            <p>
                Passionate Fronted Developer | Data Analyst | Transforming Ideas into Seamless and 
                Visually Stunning Web Solutinos
            </p>
        </div>

        <div className="hero-img">
             <div>
                <div className="tech-icon">
                    <img src="logo192.png" width={80} alt=""/>
                </div>

                <img className= "myimg" src="mylogo.jpg" height={450} border-radius={10} alt=""/>
             </div>

             <div>
                <div className="tech-icon">
                    <img src="htmllogo.png" width={80} alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="csslogo.png" width={70} alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="jslogo.png" width={60} alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="sqllogo.png" width={140} alt=""/>
                </div>
             </div>

        </div>

    </section>
    
  )
}

export default Hero