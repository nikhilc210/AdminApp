import React from 'react'
import { Container ,FormControl,Button,Form,Row,Col} from 'react-bootstrap'
/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <Form.Group controlId="formBasicPassword">
    <Form.Label>{props.label}</Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    <Form.Text className="text-muted" >
        {props.erroressage}
    </Form.Text>
  </Form.Group>
   )

 }

export default Input