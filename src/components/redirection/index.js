import React from 'react'

export default function Redirect() {
    const imgUrl = require('../../images/background-photo.jpeg');
    const img = require('../../images/share.png')

    return (
        <div className="redirect container">
            <img className="bg-img" src={imgUrl} alt="" />
            <img src='../../images/share.svg' alt="" />


            <div className="img-content">
                <div className="img-content__title">МУЗЫКА ДЛЯ БИЗНЕСА</div>
                <div className="img-content__sub-title">Музыкальное оформление бизнеса
                    без выплат в РАО и ВОИС
                    <br />
                </div>
                <div className="img-content__sub-title">
                    Более 100 готовых плейлистов
                </div>

                <a href="https://imstream.net/">
                    <button className="img-content__redirect-btn">Перейти на основной сайт
                    </button>
                </a>

            </div>
        </div>
    )
}