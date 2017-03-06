import React, {PropTypes} from 'react';
import Divider from 'muicss/lib/react/divider';
import Button from 'muicss/lib/react/button';


function Status(){
    let completed={color:"#ffb300"}

    return(
        <div id="status">
            <h2>3 / 40</h2>
            <div id="buts">
                <Button size="small" variant="flat">All</Button>
                <Button size="small" variant="flat" color="primary">Open</Button>
                <Button size="small" variant="flat" style={completed}>Completed</Button>
                <Button size="small" variant="raised" color="danger"
                    onClick={(e)=>{
                        e.preventDefault()
                        props.onCleaList()
                    }}
                >Clear List</Button>
            </div>
        </div>
    )
}

Status.PropTypes={
    onClearList: PropTypes.func.isRequired,
}

export default Status;
