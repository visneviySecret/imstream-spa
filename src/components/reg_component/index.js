import React from 'react'

export default function Registration() {


    return (
        <div>
            <form className="form" action="https://formspree.io/f/mqknoeer" method="POST">
                <div >
                    <input className="form__input" type="email" name="email" placeholder="Почта" required />
                </div>
                <div>
                    <button className="form__submit-button" type="submit">Получить предложение</button>
                </div>
            </form>
        </div>
    )
}