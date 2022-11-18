import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled, FormStyled, Input } from './Form.styled';
import { Formik } from 'formik';







const initialValues = {
    name: '',
    number: ''
}
   
export class FormikForm extends React.Component {

handleSubmit = (values, {resetForm}) => {
        
        console.log(values)
        this.props.onSubmit(values)
        resetForm();
        // console.log(actions)
    }
    

    render() {

    return (
        
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
             <FormStyled autoComplete='off'>
            <label htmlFor="name">
                Enter Name
            <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
                </label>

                <label htmlFor="number">
                    Phone number
                    <Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
               </label>
            
            <ButtonStyled type="submit">Submit</ButtonStyled>
        
        </FormStyled>
       </Formik>
    )
}
}

FormikForm.propTypes = {
    initialValues: PropTypes.objectOf(PropTypes.string),
}