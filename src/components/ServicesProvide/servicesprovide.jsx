import React from 'react';
import Style from './style.module.css'
import global from '../../utils/commonStyles.module.css'
import Image from "next/image";
import images from "../../../public/Images/image";



const CardContainer = ({ cardData }) => {
    return (
       <div className={global.parent_cont}>
         <div className={Style.main_cont}>
            <h1>Services that we are providing</h1>
            <p>High Performance Services For All Industries.</p>
            <div className={Style.cards}>
                {cardData.map((card, index) => (
                    <div key={index} className={Style.card}>
                        <Image className={Style.img} src={card.imageUrl} alt="" />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};

const Service_Provide = () => {
    // Example data for the cards
    const cardData = [
        {
            imageUrl: images.personal,
            title: 'Personal Loan',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: images.construction,
            title: 'Home Loan',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: images.business,
            title: 'Business Loan',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: images.property,
            title: 'Loan Against Property ',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
    
    ];

    return (
        <div>
            <CardContainer cardData={cardData} />
        </div>
    );
};

export default Service_Provide;
