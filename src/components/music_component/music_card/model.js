import React from 'react'

export default function MusicCard({ props, pauseRunningAudio }) {

    return (
        <div className='music-card'>
            <div >
                <img className="music-card__img" src={props.img} alt="" />
            </div>
            <div className="music-card__title">
                {props.title}
            </div>
            <div className="music-card__about">
                {props.about}
            </div>
            <div className='music-card__track-list'>
                <ul>
                    {props.src.map((item, index) => {
                        return (
                            <li key={index}>
                                <audio
                                    id={`track${item.id}`}
                                    onPlay={() => pauseRunningAudio(`track${item.id}`)}
                                    className='audio'
                                    controls
                                    preload='metadata'
                                    src={item.url}
                                ></audio>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}