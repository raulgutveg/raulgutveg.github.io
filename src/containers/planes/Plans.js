import React from "react";
import "./Plans.scss";
import Button from "../../components/button/Button";
import {plansData} from "../../portfolio"; // Aquí deberías definir tus datos de planes

export default function Plans() {
  if (plansData.viewPlans) {
    return (
      <div className="plans-container">
        <h1 className="plans-heading">{plansData.title}</h1>
        <h2 className="plans-subtitle">{plansData.subtitle}</h2>
        <div className="plans">
          {plansData.plans.map((plan, i) => (
            <div key={i} className="plan">
              <h2>{plan.title}</h2>
              <p className="price">{plan.price}</p>
              <ul className="advantages">
                {plan.advantages.map((adv, index) => (
                  <li key={index}>{adv}</li>
                ))}
              </ul>
              {plan.warning && (
                <div className="warning">
                  <div className="warning-title">
                    <p>ADVERTENCIA:</p>
                  </div>
                  <p>{plan.warning}</p>
                </div>
              )}
              <div className="price">
                <Button text="Contactame" href="#contact" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
