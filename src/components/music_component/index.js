import React from 'react';
import MusicCard from './music_card/model'

function Music() {

    const data = [
        {
            id: 1,
            title: 'Для кафе',
            about: 'Булочки станут вкуснее от звуков музыки imstream',
            img: require('../../images/cafe_img.jpg'),
            src: [
                'https://storage.yandexcloud.net/imstream/Lounge.mp3',
                'https://storage.yandexcloud.net/imstream/imstream%20pop.mp3',
                'https://storage.yandexcloud.net/imstream/Chill.mp3',
                'https://storage.yandexcloud.net/imstream/Jazz.mp3',
                'https://storage.yandexcloud.net/imstream/Italiano.mp3',
                'https://storage.yandexcloud.net/imstream/Classical.mp3'
            ]
        },
        {
            id: 2,
            title: 'Фитнес',
            about: '+ 20 кг к приседу',
            img: require('../../images/fitness_img.jpg'),
            src: [
                'https://storage.yandexcloud.net/imstream/stores_1.mp3',
                'https://storage.yandexcloud.net/imstream/stores_2.mp3',
                'https://storage.yandexcloud.net/imstream/stores_3.mp3'
            ]
        },
        {
            id: 3,
            title: 'Магазин',
            about: 'Тоже хорошо',
            img: require('../../images/shop_img.jpg'),
            src: [
                'https://storage.yandexcloud.net/imstream/fitness_1.wav',
                'https://storage.yandexcloud.net/imstream/fitness_2.wav',
                'https://storage.yandexcloud.net/imstream/fitness_3.wav',
            ]
        },
    ]

    return (
        <div>
            {/* <div className="music__header">
                <div className="music__header__title">
                    <p>Наша музыка</p>
                </div >
                <div className="music__header__sub-title">
                    <p>Лучшая музыка на районе</p>
                </div>
            </div> */}


            <div className="card">
                {
                    data.map(item =>
                        <MusicCard key={item.id} props={item} />)
                }
            </div>
        </div>
    )
}
export default Music