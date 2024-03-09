import React from "react";
import Content from "../Content/Content";

const AppDownload = () => {
  return (
    <div className="mt-16">
      <Content>
        <section className={`bg-[#439DDF] py-12 rounded-lg overflow-x-hidden`}>
          <div className="container">
            <div
              className={`flex flex-col sm:flex-row space-y-5 sm:space-y-0 items-center justify-between max-w-4xl mx-9 md:mx-auto`}
            >
              <figure data-aos="fade-right">
                <img
                  src="https://i.ibb.co/k9MKg83/app-download.png"
                  alt=""
                  className={`w-full max-w-xs`}
                />
              </figure>
              <div className={`text-white space-y-3`} data-aos="fade-left">
                <div>
                  <h2 className="font-bold text-2xl">
                    Learn on your mobile anytime!
                  </h2>
                  <p>
                    You can browse, study, and make purchases with our apps.
                  </p>
                </div>
                <div className={`flex space-x-3`}>
                  <figure className={`max-w-[10rem] cursor-pointer`}>
                    <img src="https://i.ibb.co/nmMg1gJ/play-store.png" alt="" />
                  </figure>
                  <figure className={`max-w-[10rem] cursor-pointer`}>
                    <img src="https://i.ibb.co/VmPZWjV/app-store.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </div>
  );
};

export default AppDownload;
