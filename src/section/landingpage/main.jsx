import React from 'react'
import mainStyle from './main.module.css'
import images from '../../../public/Images/image'
import Image from 'next/image'


const main = () => {
    return (
       <>
        <div className={mainStyle.bg}>
            <div className={mainStyle.main}>
                <div className={mainStyle.lft}>
                    <h1>
                    Partner with EveOn Money for the best deals and offers
                    </h1>
                    <p>Partner with EveOn Money and get closer to financial freedom.</p>
                </div>
                <div className={mainStyle.rgt}>
                    <Image src={images.MainBanner} alt="main-banner" />
                </div>
            </div>
        </div>
       </>
    )
}

export default main
