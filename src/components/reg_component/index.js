import React from 'react'

export default function Registration() {


    return (
        <form className="reg-component" action="https://formspree.io/f/mqknoeer" method="POST">
            <div >
                <input className="reg-component__input" type="email" name="email" placeholder="Почта" required />
            </div>
            <div>
                <button className="reg-component__submit-button" type="submit">Получить предложение</button>
            </div>
        </form>
    )
}