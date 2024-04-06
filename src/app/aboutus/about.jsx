import React from 'react'
import Style from './style.module.css'
import images from '../../../public/Images/image'
import Image from 'next/image'

const About = () => {
    return (
        <div className={Style.parent_cont}>
            <div className={Style.main}>
                <div className={Style.container}>
                    <h1 className={Style.h_1}>We provide innovative financial solutions to achieve financial goals.</h1>
                    <p>
                        We aim to be a customer-centric organization that <br /> prioritizes the needs and preferences of our customers.
                    </p>
                </div>
            </div>
            <div className={Style.sec_cont}>
                <div className={Style.top}>
                    <h2 className={Style.h_2}>We are customer-centric platform that utilizes AI technology to empower individuals to achieve financial empowerment.</h2>
                </div>
                <div className={Style.center}>
                    <div className={Style.lft}>
                        <p className={Style.para}>EveOn Money is a platform that provides unbiased information on various banking products and services such as savings accounts, credit cards, personal loans, insurance products, etc. The platform aims to simplify the process of finding the right banking products that suit the needs of individuals.</p>
                    </div>
                    <div className={Style.rgt}>
                        <p className={Style.para}>EveOn Money also provides information about , to help customers avoid financial pitfalls and empower them to take control of their financial lives. EveOn Money utilizes AI technology to provide accurate and up-to-date information, ensuring a hassle-free experience for its users.</p>
                    </div>
                </div>
                <div className={Style.btm}>
                    <div className={Style.lft}>
                        <h3 className={Style.h_2}>Our Mission</h3>
                        <p className={Style.para}>Our mission is to provide innovative financial solutions that enable our customers to achieve their financial goals. We aim to be a customer-centric organisation that prioritises the needs and preferences of our customers.</p>
                    </div>
                    <div className={Style.rgt}>
                        <h3 className={Style.h_2}>Our Vision</h3>
                        <p className={Style.para}>We envision a world where banking and financial services are accessible, affordable, and convenient for all. Our aim is to provide innovative and personalized solutions to our customers. We strive to build a trusted relationship with our customers, where we not only provide financial solutions but also educate and empower them to make informed financial decisions.
                        </p>
                    </div>
                </div>
            </div>
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
            <div className={Style.third_cont}>
                <div className={Style.top}>
                    <h2 className={Style.h_2}>
                        Awards & Achievements
                    </h2>
                </div>
                <div className={Style.btm}>
                    <div className={Style.cards}>
                        <div className={Style.card}>
                            <div className={Style.top}>
                                <Image className={Style.Imgsvg} src={images.awardsframe} alt="awardsframe" />
                            </div>
                            <div className={Style.center}>
                                <Image className={Style.Imgsvg} src={images.awardstree} alt="awardstree" />
                                <p>Project Leader of the Year award at India DevOps Show
                                </p>
                                <h5>2024</h5>
                            </div>
                        </div>
                        <div className={Style.card}>
                            <div className={Style.top}>
                                <Image className={Style.Imgsvg} src={images.awardsframe} alt="awardsframe" />
                            </div>
                            <div className={Style.center}>
                                <Image className={Style.Imgsvg} src={images.awardstree} alt="awardstree" />
                                <p>The Quantic Business Media Pvt. Ltd Technology Leader Award.
                                </p>
                                <h5>2024</h5>
                            </div>
                        </div>
                        <div className={Style.card}>
                            <div className={Style.top}>
                                <Image className={Style.Imgsvg} src={images.awardsframe} alt="awardsframe" />
                            </div>
                            <div className={Style.center}>
                                <Image className={Style.Imgsvg} src={images.awardstree} alt="awardstree" />
                                <p>Third largest credit card distributor in India
                                </p>
                                <h5>2024</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
