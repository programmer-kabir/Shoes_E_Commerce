import React from "react";

const FooterComponent = ({ title, text }) => {
  return (
    <>
      <div className="pb-5">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {text.map((te, index) => (
        <div key={index}>
          <div className="pt-3">
            <p className="font-medium hover:underline text-base cursor-pointer">
              {te}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterComponent;
