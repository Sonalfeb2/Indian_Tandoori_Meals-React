import "./AvailableMeals.css";
import MealImg from "../../assets/Veg-Upma-2.jpg";
import MealItemForm from "./MealItemForm";
const AvalableMeals = () => {
  const dummyMeals = [
    {
      id: "M1",
      mealName: "Upma",
      des: "Healthy dish with deliciousness",
      price: "Rs.125"
    },
    {
      id: "M2",
      mealName: "Upma",
      des: "Healthy dish with deliciousness",
      price: "Rs.125"
    },
    {
      id: "M3",
      mealName: "Upma",
      des: "Healthy dish with deliciousness",
      price: "Rs.125"
    },
    {
      id: "M4",
      mealName: "Upma",
      des: "Healthy dish with deliciousness",
      price: "Rs.125"
    },
    {
      id: "M5",
      mealName: "Upma",
      des: "Healthy dish with deliciousness",
      price: "Rs.125"
    }
  ];
  return (
    <div className="row">
      {dummyMeals.map(meal =>
        <div className="column" key={meal.id}>
          <div className="card">
            <img src={MealImg} alt="A table full of delecious food" />
            <h1>{meal.mealName}</h1>
            <p>
              <i>
                {meal.des}
              </i>
            </p>
            <b>{meal.price}</b>{" "}
            <div className="card__overlay">
              <MealItemForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AvalableMeals;
