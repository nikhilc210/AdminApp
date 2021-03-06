import React from 'react'
import { Container ,FormControl,Button,Form,Row,Col} from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../Input'
/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <div>
    <Layout></Layout>
    <Container>
      <Row style={{marginTop:'50px'}}>
        <Col md={{span:6, offset:3}}>
        <Form>
          <Row>
            <Col md={{span:6}}>
            <Input  
                  label="Firstname"
                  placeholder="Enter Firstname"
                  type="text"
                  value=""
                  onChange={()=>{}}
                  
                />
            </Col>
            <Col md={{span:6}}>
            <Input  
                  label="Lastname"
                  placeholder="Enter Lastname"
                  type="text"
                  value=""
                  onChange={()=>{}}
                  
                />
            </Col>

          </Row>
          <Input  
                  label="Email"
                  placeholder="Enter Email Address"
                  type="email"
                  value=""
                  onChange={()=>{}}
                  
                />

          <Input  
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  value=""
                  onChange={()=>{}}
                  
                />
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
  </Form>
        </Col>

      </Row>
   
    </Container>
  </div>
   )

 }

export default Signup