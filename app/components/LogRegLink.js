import React, {PropTypes} from 'react';
import Link from 'react-router';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

function LogRegLink(){
    return(
        <div>
            <Row>
                <Col md="6">
                    <Link to='login'>
                        <Button variant="flat" color="primary">Login</Button>
                    </Link>
                </Col>
                <Col md="6">
                    <Link to='signup'>
                        <Button variant="flat" color="primary">Signup</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default LogRegLink;