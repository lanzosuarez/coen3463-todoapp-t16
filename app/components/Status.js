import React, {PropTypes} from 'react';
import Divider from 'muicss/lib/react/divider';
import Button from 'muicss/lib/react/button';


const Status = (props)=>{
    let completed={color:"#ffb300"}
    return(
        <div id="status">
            <h2>{props.onCompletedCount} / {props.onCount}</h2>
            <div id="buts">
                <Button size="small" variant="flat" onClick={props.onGetAll}>All</Button>
                <Button size="small" variant="flat" color="primary" onClick={props.onGetOpen}>Open</Button>
                <Button size="small" variant="flat" style={completed} onClick={props.onGetCompleted}>Completed</Button>
                <Button size="small" variant="raised" color="danger" onClick={props.onClear}
                >Clear Completed</Button>
            </div>
        </div>
    )
}

Status.propTypes={
    onClear: PropTypes.func.isRequired,
    onCount: PropTypes.number.isRequired,
    onCompletedCount: PropTypes.number.isRequired,
    onGetCompleted: PropTypes.func.isRequired,
    onGetOpen: PropTypes.func.isRequired,
    onGetAll: PropTypes.func.isRequired
}

export default Status;
