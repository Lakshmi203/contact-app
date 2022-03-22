import React from 'react'

function List({ people, setPeople }) {
    let card = people.map((person)=>{
        const { id, name, age, image } = person;
        return (
            <li>
                <img src={image} alt={name} />
                <div className="person">
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </li>
        )
    })
  return (
    <ul>
        <h3>{people.length} birthdays today</h3>
        {card}
        <button onClick={()=>setPeople([])}>Clear All</button>
    </ul>
  )
}

export default List