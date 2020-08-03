import React from 'react'

const Person = ({ person, removePerson }) => {
    const doRemovePerson = () => removePerson(person)

    return (
        <p>
            <strong>{person.name}</strong><br />
            {person.number}<br />
            <button onClick={doRemovePerson}>delete</button>
        </p>
    )
} 

export default Person