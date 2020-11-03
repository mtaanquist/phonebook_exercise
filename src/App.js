import React, { useState } from 'react'
import Alert from './components/Alert'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={alertMessage} type={alertType} />
      <Filter data={filter} handler={setFilter} />
      <h2>Add new</h2>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        setAlertMessage={setAlertMessage} 
        setAlertType={setAlertType} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App