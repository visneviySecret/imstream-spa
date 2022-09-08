import React from 'react'

export default function Redirect() {
    const imgUrl = require('../../images/background-photo.jpeg');
    // https://imstream.net/static/75c3b7a23fce33572ffe4b6661f19ac0/23e94/welcome-background.webp

    return (
        <div className="redirect container">
            <img className="bg-img" src={imgUrl} alt="" />
            <img src='../../images/share.svg' alt="" />


            <div className="img-content">
                <div className="img-content__title">МУЗЫКА ДЛЯ БИЗНЕСА</div>
                <div className="img-content__sub-title">Музыкальное оформление бизнеса
                    без выплат в РАО и ВОИС</div>
                <button className="img-content__redirect-btn">Перейти на основной сайт
                </button>
            </div>
        </div>
    )
}