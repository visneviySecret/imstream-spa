import React from 'react'
import CheckImg from '../../images/CheckImg.svg'

export default function AboutUs() {
    return (
        <div className='about-us'>
            <div className="about-us__header">
                <div className='about-us__header__title'>
                    Почему мы такие классные
                </div>
                <div className='about-us__header__sub-title'>
                    We work hard every day to make life of our clients better and happier
                </div>
            </div>
            <ul className="list">
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Абсолютно легально
                        </div>
                        <div className="list__about">
                            We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience.
                        </div>
                    </div>

                </li>
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Отличная музыка
                        </div>
                        <div className="list__about">
                            Our managers are always ready to answer your questions. You can call us at the weekends and at night. You can also visit our office for a personal consultation.
                        </div>
                    </div>

                </li>
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Еще что-то
                        </div>
                        <div className="list__about">
                            Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels.
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    )
}