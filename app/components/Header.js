import React, {PropTypes} from 'react';
import Button from 'muicss/lib/react/button';
import Divider from 'muicss/lib/react/divider';

const Header = (props)=>{
    let s3 = {position: "relative", float: "right", top: "-17px"}
    return(
        <div>
            <div className="mui--text-center mui--text-dark-secondary"  id="s1">
                <p id="s2">todos</p>
            </div>
            <div id="name">
                <span>Content 1&nbsp;</span>
                <span className="mui--divider-left mui--text-dark-secondary" >&nbsp;Content 2</span>
                <Button size="small" variant="raised" style={s3} color="primary" onClick={props.onLogout}>Logout</Button>
            </div>
        </div>
    );
};

Header.propTypes={
    onLogout: PropTypes.func.isRequired
};
export default Header;
