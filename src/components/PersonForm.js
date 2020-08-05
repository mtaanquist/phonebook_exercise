import React, { useState } from 'react'
import phonebookService from '../services/phonebookService'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to the phonebook. Replace the old number?`)) {
                const oldPerson = persons.find(person => person.name === newName)
                const newPerson = {
                    name: oldPerson.name,
                    number: newNumber
                }
                
                phonebookService
                    .update(oldPerson.id, newPerson)
                    .then(() => {
                        const newPersons = [...persons]
                        const index = newPersons.findIndex(person => person.name === newName)
                        newPersons[index].number = newNumber
                        setPersons(newPersons)
                    })
            }
        } else {
            const newPerson = {
                name: newName,
                number: newNumber
            }

            phonebookService
                .create(newPerson)
                .then(response => setPersons(persons.concat(response)))
        }

        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm