import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App(plan) {
  var featuresArr = [
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Project",
    "Dedicated Phone Support",
    "Free Subdomains",
    "Monthly Status Reports",
  ];

  return (
    <p className="card col-4">
      <h6 className="planName"> {plan.name}</h6>
      <h6 className="price">${plan.price}/month</h6>
      <div className="features">
        <ul style={{ textAlign: "left" }}>
          {featuresArr.map((item, index) => (
            <li
              className={
                (plan.name === "Free" && index >= 4) ||
                (plan.name === "Plus" && index >= 6)
                  ? "lighterText"
                  : "normalText"
              }
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="btn btn-primary">
        Subscribe
      </button>
    </p>
  );
}

export default App;
