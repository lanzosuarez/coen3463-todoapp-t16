import React from 'react';
import Test from '../components/Test';

class TestContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("hello");
        return(
            <Test/>
        )
    }
}

export default TestContainer;