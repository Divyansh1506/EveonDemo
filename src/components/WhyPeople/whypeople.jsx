import React from 'react';
import Style from './style.module.css'
import global from '../../utils/commonStyles.module.css'


const CardContainer = ({ cardData }) => {
    return (
        <div className={global.parent_cont}>
            <div className={Style.main_cont}>
                <h1>Why People Choose Us</h1>
                <p>This question should make the viewer want to open the brochure to learn more.</p>
                <div className={Style.cards}>
                    {cardData.map((card, index) => (
                        <div key={index} className={Style.card}>
                            <img className={Style.img} src={card.imageUrl} alt="" />
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WhyPeople = () => {
    // Example data for the cards
    const cardData = [
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Quick & Easy',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Absolute Security',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Quick Approval',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Low Interest Rates',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Personal Security',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },
        {
            imageUrl: 'https://preview.colorlib.com/theme/loanday/img/choose/choose-1.png',
            title: 'Disbursement Day',
            description: 'Typography should be relevant and thought out. Type is so strong that it can',
        },

    ];

    return (
        <div>
            <CardContainer cardData={cardData} />
        </div>
    );
};

export default WhyPeople;
