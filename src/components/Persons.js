import React, { useEffect } from 'react'
import Person from './Person'
import phonebookService from '../services/phonebookService'

const Persons = ({ filter, persons, setPersons }) => {
    const personsToShow = persons.filter(
        person => person.name.toLowerCase().includes(filter)
    )

    useEffect(() => {
        phonebookService
            .readAll()
            .then(response => setPersons(response))
    }, [setPersons])

    const removePerson = (oldPerson) => {
        if (window.confirm(`Delete ${oldPerson.name}?`)) {
            phonebookService
                .remove(oldPerson.id)
                .then(() => setPersons(
                    persons.filter(person => person.id !== oldPerson.id)
                ))
        }
    }

    return (
        <div>
            {personsToShow.map(
                person =>
                    <Person 
                        key={person.id}
                        person={person}
                        removePerson={removePerson} 
                    />
            )}
        </div>
    )
}

export default Persons