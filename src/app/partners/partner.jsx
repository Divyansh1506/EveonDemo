import React from 'react'
import Style from '../aboutus/style.module.css'
import images from "../../../public/Images/image";
import Image from 'next/image'
import Contact from '../contactus/contact';
;


const Partner = () => {
    return (
        <div>
            <Contact/>
            <div className={Style.third_cont}>
                <div className={Style.top}>
                    <h2 className={Style.h_2}>
                        Our partners from Leading Financial Industries
                    </h2>
                </div>
                <div className={Style.btm}>
                    <div className={Style.logos}>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.UnityBankrbg} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.adhaarRbg} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.equitas} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.finnable} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.landingkart} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.neomain} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.ugro} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.bajaj} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.bandhanbank} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.faircent} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.BOB} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.ashv} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.Neomain} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.yesbank} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.dcb} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.Axis} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.icici} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.Hero} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.Fullerton} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.HDFC} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.iifl} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.idfc} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.jana} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.incred} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.indusland} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.L_T} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.utkarsh} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.paysense} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.pnb} alt="UnityBank" />
                        </div>
                        <div className={Style.logo}>
                            <Image className={Style.image} src={images.ujjivan} alt="UnityBank" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
