import React, {PropTypes} from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

function SignupForm(props){
  return (
    <Form onSubmit={props.onSignup} onChange={props.onChangeForm}>
      <h2>Nice meeting you!</h2>
      <Row>
        <Col md="6">
          <Input label="First Name" floatingLabel={true} required={true} />
        </Col>
        <Col md="6">
          <Input label="Last Name" floatingLabel={true}  required={true} />
        </Col>
      </Row>
      <Input label="Email" floatingLabel={true} required={true} type="email" onKeyPress={props.onChangeEmail} />
      <Input label="Password" type="password" floatingLabel={true} required={true} />
      <Row>
          <Col md="6"> 
              <Button variant="raised">Cancel</Button>
          </Col>
          <Col md="6"> 
              <Button variant="raised" type="submit" id="submitButton" >Submit</Button>
          </Col>
      </Row>
      
    </Form>
  );
}

SignupForm.PropTypes={
  onSignup: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeForm: PropTypes.func.isRequired
}

export default SignupForm ;