import React from 'react'
import CheckImg from '../../images/CheckImg.svg'

export default function AboutUs() {
    return (
        <div className='about-us'>
            <div className="about-us__header">


            </div>
            <ul className="list">
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Лицензионная музыка
                        </div>

                    </div>

                </li>
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Правовая защита
                        </div>

                    </div>

                </li>
                <li className="list__item">
                    <img src={CheckImg} alt="" className="list__img" />

                    <div className="list__body">
                        <div className="list__title">
                            Без отчислений в РАО и ВОИС
                        </div>

                    </div>
                </li>
            </ul>

        </div>
    )
}