import PropTypes from 'prop-types'

const Button = ({ color, text, onclick, showAdd}) => {
    return ( 
        <div> 
            <button onClick={onclick} style={{ backgroundColor: color}} className="btn">{text} </button>
        </div>
     );
}
 
Button.defaultProps = {
    color: 'steelblue',
    
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}
export default Button;