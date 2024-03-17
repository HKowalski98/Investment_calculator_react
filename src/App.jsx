import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
let initialData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1,
};
function App() {
  let [userInput, setUserInput] = useState({ ...initialData });

  function inputChangedHandler(event) {
    setUserInput((prevData) => {
      return { ...prevData, [event.target.id]: +event.target.value };
    });
  }

  const inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />;
      <UserInput inputData={userInput} inputChanged={inputChangedHandler} />
      {!inputIsValid && <p className="center">Please enter duration grater than zero</p>}
      {inputIsValid && <Result inputData={userInput} />}
    </>
  );
}

export default App;
