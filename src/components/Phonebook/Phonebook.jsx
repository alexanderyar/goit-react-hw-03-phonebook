import React from 'react'
import PropTypes from 'prop-types'


import { nanoid } from 'nanoid'

import { FormikForm } from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import { PhonebookWrapper } from './Phonebook.styled'

export class Phonebook extends React.Component {
    // nanoid()

      state = {

          contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    
          ],
          filter: '',
      }
    
    updatePhoneBookList = (newContactName) => {
        console.log(newContactName)
        const foundDuplicate = this.state.contacts.find(contact => contact.name === newContactName.name)
        if (foundDuplicate) {
            alert(`Open your eyes, ${newContactName.name} is already in your phonebook!`)
        return}
        
       
        
        const contactNew = {...newContactName, id: nanoid()}
        console.log(contactNew)

        this.setState(prevState => ({contacts: [...prevState.contacts, contactNew]}))
    }
    
    // filterFunc = (filterInfo) => {
    //    return this.state.contacts.filter(contact => {contact.name.includes(filterInfo)})
    // }

    handleChange = (e) => {
        console.log(e.currentTarget.value)
        
        this.setState(({ filter: e.currentTarget.value }))
        // this.setState(prevState => ({ filter: e.currentTarget.value }))


    }

    onDeleteClick = (id) => {
        // console.dir(id)
        this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))

}

    render() {
        // const { contacts } = this.state
        const filterLowered = this.state.filter.toLowerCase();
        const filteredContacts = this.state.contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterLowered)
            
            
            // console.log(this.state.filter)
              )
      
        return (
             <PhonebookWrapper>
        <FormikForm onSubmit={this.updatePhoneBookList} />
        <Contacts contacts={filteredContacts} filterFunc={this.handleChange} inputValue={this.state.filter} onDeleteClick={this.onDeleteClick} />
        </PhonebookWrapper>
        )
       
    }
    
}

Phonebook.propTypes = {
    newContactName: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string.isRequired,
}