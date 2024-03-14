import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
let initialData = {
  calculationData: {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  },
  annualData: [],
};
function App() {
  let [appData, setAppData] = useState({ ...initialData });

  function inputChangedHandler(event) {
    if (isNaN(parseFloat(event.target.value))) return;
    setAppData((prevData) => {
      let newData = { ...prevData, ...prevData.calculationData };
      newData.annualData = calculateInvestmentResults({
        ...newData.calculationData,
        [event.target.id]: parseFloat(event.target.value),
      });
      newData.calculationData = {
        ...newData.calculationData,
        [event.target.id]: parseFloat(event.target.value),
      };
      return newData;
    });
  }

  return (
    <>
      <Header />;
      <UserInput calculationData={appData.calculationData} inputChanged={inputChangedHandler} />
      <Result annualData={appData.annualData} />
    </>
  );
}

export default App;
