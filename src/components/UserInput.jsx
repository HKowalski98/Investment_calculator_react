import { calculateInvestmentResults } from "../util/investment";

export default function UserInput({ inputData, inputChanged }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            min={0}
            id="initialInvestment"
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={(event) => inputChanged(event)}
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            min={0}
            id="annualInvestment"
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) => inputChanged(event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            min={0}
            id="expectedReturn"
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={(event) => inputChanged(event)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={inputData.duration}
            onChange={(event) => inputChanged(event)}
          />
        </p>
      </div>
    </section>
  );
}
