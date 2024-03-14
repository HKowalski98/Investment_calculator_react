export default function UserInput({ calculationData, inputChanged }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            min={0}
            id="initialInvestment"
            type="number"
            value={calculationData.initialInvestment}
            onChange={(event) => inputChanged(event)}
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            min={0}
            id="annualInvestment"
            type="number"
            value={calculationData.annualInvestment}
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
            value={calculationData.expectedReturn}
            onChange={(event) => inputChanged(event)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            min={1}
            id="duration"
            type="number"
            value={calculationData.duration}
            onChange={(event) => inputChanged(event)}
          />
        </p>
      </div>
    </section>
  );
}
