import React from "react";

const ActionSection = ({ action, number }) => {
  let gridElementOrder = "";

  if (number === "02") {
    gridElementOrder = "order-last";
  }

  return (
    <section className=" grid grid-cols-[1fr,1fr] gap-10 text-white">
      <img src={action.image} className={`${gridElementOrder} w-full`} />
      <div className="flex w-full">
        <p className=" mr-6 font-montserrat text-4xl font-medium">{number}</p>
        <div className=" flex flex-col ">
          <h3 className="font-montserrat text-4xl font-medium mb-6">
            {action.title}
          </h3>
          <p className=" font-plexSerif text-xl font-normal">
            {action.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
