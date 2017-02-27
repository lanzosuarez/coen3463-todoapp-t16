import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


class LoginForm extends React.Component {
  render() {
    return (
      <Form>
        <h2>Welcome Back!</h2>
        <Input label="Email" floatingLabel={true} />
        <Input label="Password" floatingLabel={true} />
        <Row>
            <Col md="6"> 
                <Button variant="raised">Cancel</Button>
            </Col>
            <Col md="6"> 
                <Button variant="raised">Submit</Button>
            </Col>
        </Row>
       
      </Form>
    );
  }
}
export default LoginForm;