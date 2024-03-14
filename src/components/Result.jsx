import { formatter } from "../util/investment";

export default function Result({ annualData }) {
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
        {annualData.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td></td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
