import "./Button.css";
const Button = props => {
    const btnHandler = () =>{
        if(props.CartHandler){
            props.CartHandler();
        }
        else{
            console.log('Ordering...')
        }
    }

  return(
  <div>
    <button onClick={btnHandler} className="btn">
      {props.children}
    </button>
  </div>
  )
};
export default Button;
