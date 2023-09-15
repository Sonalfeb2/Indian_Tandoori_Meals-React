import "./Button.css";
const Button = props => {
    const btnHandler = () =>{
        if(props.showCartHandler){
            props.showCartHandler();
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
