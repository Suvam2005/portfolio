import "./button.css"
import "../styles/variables.css"
const Button = ({children , onClick , classname , variant , type = "button"}) => {
  return (
    <button type= {type} className = {`btn ${variant} ${classname}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button