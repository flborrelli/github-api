import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'


function SearchForm (props){
  return(
    <Form onSubmit={props.getSubmit}>
    <Input onChange={props.getUserInput} icon='users' iconPosition='left' placeholder='Search users...' className='mr-2'/>
    <Button icon='search' type='submit'></Button>
    </Form>
  )
}

export default SearchForm;