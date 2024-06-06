import React from "react";
import tick from "../../assets/images/Group 152.png";
import Pnp from "../../components/PlanNPricing/Pnp";
import Table from "../../components/Table/Table";

const PricingPage = () => {
  return (
    <div className="pt-10">
      <Pnp />
      <div className="hidden sm:block">
        <Table />
      </div>
    </div>
  );
};

export default PricingPage;
