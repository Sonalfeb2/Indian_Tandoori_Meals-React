import './MealItemForm.css'
const MealItemForm = () => {
  return (
      <div className="overlay__form">
       <label htmlFor="amount">Amount </label>
       <input type="number" min={1} max={5} step={1} defaultValue={0}/>
       <button>Add to Cart</button>
      </div>
  );
};
export default MealItemForm;
