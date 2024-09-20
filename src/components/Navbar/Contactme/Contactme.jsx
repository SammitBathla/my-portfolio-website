import React from 'react'
import "./Contactme.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contactme = () => {
  return (
    
    <section>
        <h5> Cantact Me</h5>
        <div className="contact-content">   
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    iconUrl="emaillogo.png"
                    text = " sammitbathla7@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="githublogo.png"
                    text="https://github.com/sammitbathla"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
        

  )
}

export default Contactme