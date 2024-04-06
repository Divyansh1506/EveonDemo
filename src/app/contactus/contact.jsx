import React from 'react'
import Style from './style.module.css'
import global from '../../utils/commonStyles.module.css'
import ContactForm from '@/components/Contact/contact'


const Contact = () => {
  return (
    <div className={global.parent_cont}>
      <div className={Style.main_cont}>
        <h1>Hello! need assistance?</h1>
        <p>We are more than happy to help you.</p>
        <div className={Style.boxes}>
          <div className={Style.box1}>
            <div className={Style.circle}>
              <img src="https://www.banksathi.com/assets/star-contact-one.svg" alt="img" />
            </div>
            <div>
              <h5>Fast Revets</h5>
              <p>All of your queries to be solved by us under 2-3 working days.</p>
            </div>
          </div>
          <div className={Style.box1}>
            <div className={Style.circle}>
              <img src="https://www.banksathi.com/assets/star-contact-one.svg" alt="img" />
            </div>
            <div>
              <h5>Helping Approach</h5>
              <p>Our support staff is always there for your to resolve your issues.</p>
            </div>
          </div>
          <div className={Style.box1}>
            <div className={Style.circle}>
              <img src="https://www.banksathi.com/assets/star-contact-one.svg" alt="img" />
            </div>
            <div>
              <h5>Strong Support</h5>
              <p>We have will trained support who have answer of all your queries.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.sec_cont}>
        <div className={Style.writeus}>
          <div style={{width:'100%'}}>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
