import React from 'react'
import './Drink.css'

const Drink = props => {

    return (
        <div className="drinkCard">
            <h3>{props.name}</h3>
            <ul>
                <li>Azúcar: {props.sugar}</li>
                <li>Carbohidratos: {props.carbs}</li>
            </ul>
        </div>)
}

export default Drink