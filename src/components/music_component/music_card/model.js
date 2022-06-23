import React from 'react'

export default function MusicCard({ props }) {

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
                                    className='audio'
                                    controls
                                    src={item}
                                ></audio>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}