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
                { id: 1, url: 'https://storage.yandexcloud.net/imstream/Lounge.mp3' },
                { id: 2, url: 'https://storage.yandexcloud.net/imstream/imstream%20pop.mp3' },
                { id: 3, url: 'https://storage.yandexcloud.net/imstream/Chill.mp3' },
                { id: 4, url: 'https://storage.yandexcloud.net/imstream/Jazz.mp3' },
                { id: 5, url: 'https://storage.yandexcloud.net/imstream/Italiano.mp3' },
                { id: 6, url: 'https://storage.yandexcloud.net/imstream/Classical.mp3' }
            ]
        },
        {
            id: 2,
            title: 'Фитнес',
            about: '+ 20 кг к приседу',
            img: require('../../images/fitness_img.jpg'),
            src: [
                { id: 7, url: 'https://storage.yandexcloud.net/imstream/fitness_1.wav' },
                { id: 8, url: 'https://storage.yandexcloud.net/imstream/fitness_2.wav' },
                { id: 9, url: 'https://storage.yandexcloud.net/imstream/fitness_3.wav' },
            ]
        },
        {
            id: 3,
            title: 'Магазин',
            about: 'Тоже хорошо',
            img: require('../../images/shop_img.jpg'),
            src: [
                { id: 10, url: 'https://storage.yandexcloud.net/imstream/stores_1.mp3' },
                { id: 11, url: 'https://storage.yandexcloud.net/imstream/stores_2.mp3' },
                { id: 12, url: 'https://storage.yandexcloud.net/imstream/stores_3.mp3' }

            ]
        },
    ]
    var nowplaying = null;

    function pauseRunningAudio(id) {
        var x = document.getElementById(nowplaying);
        console.log(nowplaying)
        if (nowplaying != null && nowplaying != id) {
            x.pause();
            x.load();
        }
        nowplaying = id;
    }
    return (
        <div className="card">
            {
                data.map(item =>
                    <MusicCard key={item.id} props={item} pauseRunningAudio={pauseRunningAudio} />)
            }
        </div>
    )
}
export default Music