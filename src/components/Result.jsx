import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputData }) {
  let tableData = calculateInvestmentResults(inputData);
  const initialInvestment =
    tableData[0].valueEndOfYear - tableData[0].interest - tableData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => {
          const totalInterest =
            item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
