import React from 'react';
import Style from './style.module.css'
import global from '../../utils/commonStyles.module.css'
import Image from "next/image";
import images from "../../../public/Images/image";



const CardContainer = ({ cardData }) => {
    return (
        <div className={global.parent_cont}>
            <div className={Style.main_cont}>
                <p style={{ color: '#013474' }}>How it works?</p>
                <div className={Style.cards}>
                    {cardData.map((card, index) => (
                        <div key={index} className={Style.card}>
                            <div className={Style.top}>
                                <img className={Style.img} src={card.imageUrl} alt="image" />
                            </div>
                            <div className={Style.btm}>
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button className={global.btn}>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const How_works = () => {
    // Example data for the cards
    const cardData = [
        {
            imageUrl: 'https://www.marinerfinance.com/wp-content/uploads/2023/01/1.webp',
            title: 'Get a quick decision',
            description: 'Apply online in minutes to see if you are approved with no obligation or impact to your credit*.',
        },
        {
            imageUrl: 'https://www.marinerfinance.com/wp-content/uploads/2023/01/2.webp',
            title: 'Check your offers',
            description: 'If approved, review your personalized loan offers.',
        },
        {
            imageUrl: 'https://www.marinerfinance.com/wp-content/uploads/2023/01/3.webp',
            title: 'Get funded',
            description: 'After you verify all of your information and accept an offer, we’ll send the money to your bank or you can pick up a check in a local branch near you.',
        },

    ];

    return (
        <div>
            <CardContainer cardData={cardData} />
        </div>
    );
};

export default How_works;
