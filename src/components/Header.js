import PropTypes from 'prop-types'

import Button from "./Button";

 const Header = ({ title, onAdd, showAdd }) => {
    
    return ( 
       <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'steelblue'} text={showAdd ? 'Close' : 'Add'} onclick={onAdd} />
          
       </header> 
     );
}
 

Header.defaultProps = {
    title: 'Task Manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;