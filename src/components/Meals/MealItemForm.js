import './MealItemForm.css'
import Button from '../UI/Button';
const MealItemForm = () => {
  return (
      <div className="overlay__form">
       <label htmlFor="amount">Amount </label>
       <input type="number" min={1} max={5} step={1} defaultValue={0}/>
       <Button>Add to Cart</Button>
      </div>
  );
};
export default MealItemForm;
