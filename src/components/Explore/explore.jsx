import React from 'react'
import Style from '../../app/aboutus/style.module.css'
import explore from './style.module.css'
import global from '../../utils/commonStyles.module.css'

const Explore = () => {
    return (
        <div>
            <div style={{backgroundColor:'#013474'}} className={Style.main}>
                <div className={`${Style.container}`}>
                    <h1 style={{ color: '#fff' }} className={explore.h_1}>Explore a personal loan near you</h1>
                    <p style={{ fontSize: '1rem',
                    fontFamily: 'gilroy',
                    lineHeight: 'normal',
                    fontWeight: '500',
                    textAlign: 'center',
                    color: '#fff',
                    letterSpacing: '1px'}}>
                    Whether you want to consolidate debt, pay your bills, or travel to your dream destination, Mariner Finance is here to help you. Explore our personal loans today and move one step closer to meeting your financial goals.
                </p>
                <div className={explore.exp_container}>
                    <h1 className={explore.h_1}>Apply Online</h1>
                    <p className={explore.para}>Upon your application submission and approval, we’ll present you with any available persona loan offer(s). We understand that every borrower’s needs and goals are different. So we customize our offers to meet your needs. </p>
                    <button className={global.btn}>
                        Apply Online Now
                    </button>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Explore
