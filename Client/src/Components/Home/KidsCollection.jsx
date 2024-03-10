import React from "react";
import Content from "../Content/Content";
import Title from "../Design/Title";
import useShoes from "../Hooks/useShoes";
import { Link } from "react-router-dom";

const KidsCollection = () => {
  const [shoes] = useShoes();

  // Filter out items with the "kids" property
  const kidsShoes = shoes.filter((shoe) => shoe.kids);

  return (
    <Content>
      <div className="mt-16">
        <Title title={"Our Best Kids Collection"} />

        <div className="grid md:grid-cols-2 gap-10 pt-5">
          {kidsShoes.map((shoe) => (
            <Link to={`${shoe?.category}`} key={shoe._id}>
              <div className="group relative block bg-black rounded-md shadow-xl">
                <img
                  alt={shoe.name}
                  src={shoe.mainImage}
                  className="absolute rounded-md inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-white">
                    {shoe.category}
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {shoe.name}
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white font-semibold">
                        {shoe.Description.product.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default KidsCollection;