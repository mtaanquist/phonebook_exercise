import React from 'react'

const Person = ({ person, removePerson }) => {
    return (
        <p>
            <strong>{person.name}</strong><br />
            {person.number}<br />
            <button onClick={() => removePerson(person)}>delete</button>
        </p>
    )
} 

export default Person