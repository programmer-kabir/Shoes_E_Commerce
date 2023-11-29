import React from "react";

const AddProduct = () => {
  const formSubmit = () => {};
  return (
    <div className="px-5 bg-white">
      <div className=" pt-7 ">
        <div>
          <form onSubmit={formSubmit} className="space-y-6  mx-auto  p-10  ">
            {/* title  */}
            <div>
              <label
                htmlFor="title"
                className="relative block rounded-md py-2 border border-gray-400 px-3 text-base shadow-sm  outline-none "
              >
                <input
                  type="text"
                  id="title"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="title"
                  name="title"
                />

                <span className="pointer-events-none font-medium absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  name
                </span>
              </label>
            </div>
            {/* Second Div */}
            <div className="grid grid-cols-2 gap-6">
              {/* Shoes category  */}
              <div className="border rounded-md ">
                <select
                  name="category"
                  className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                >
                  <option className="font-medium" value="" disabled selected>
                    Select Category
                  </option>
                  <option value="mens_formal_shoes">Men's Formal Shoes</option>
                  <option value="mens_casual_shoes">Men's Casual Shoes</option>
                  <option value="mens_sports_shoes">Men's Sports Shoes</option>
                  <option value="mens_Sandals_Flip-Flops">
                    Men's Sandals & Flip-Flops
                  </option>
                  <option value="mens_boots">Men's Boots</option>
                  <option value="mens_converse_sneakers">
                    Men's Converse & Sneakers
                  </option>
                  <option value="mens_loafers">Men's Loafers</option>
                  <option value="women_Sandals_Flip-Flops">
                    Women's Sandals & Flip-Flops
                  </option>
                  <option value="women_Flat_Sandals">
                    Women's Flat Sandals
                  </option>
                  <option value="women_hell">Heel</option>
                  <option value="women_casual_shoes">
                    Women's Casual Shoes
                  </option>
                  <option value="women_sports_shoes">
                    Women's Sports Shoes
                  </option>
                  <option value="girl_formal_shoes">Girl Formal Shoes</option>
                  <option value="boy_formal_shoes">Boy Formal Shoes</option>
                </select>
              </div>
              {/* seller  */}
              <div className="border rounded-md ">
                <select
                  name="category"
                  className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                >
                  <option className="font-medium" value="" disabled selected>
                    Seller Name
                  </option>
                  <option value="Walkar">Walkar</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* seller  */}
              <div className="border rounded-md ">
                <select
                  name="category"
                  className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                >
                  <option className="font-medium" value="" disabled selected>
                    Seller Name
                  </option>
                  <option value="Walkar">Walkar</option>
                </select>
              </div>
              {/* Size  */}
              <div>
                <label
                  htmlFor="size"
                  className="relative block rounded-md py-2 border border-gray-400 px-3 text-base shadow-sm  outline-none "
                >
                  <input
                    type="text"
                    id="size"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder="size"
                    name="size"
                  />

                  <span className="pointer-events-none font-medium absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Size
                  </span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
            {/* Main Image Input  */}
            <fieldset class="w-full space-y-1 text-black">
              <label for="files" class="block text-sm font-medium">
                Main Image
              </label>
              <div class="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  class="w-full px-5 py-2 border border-gray-400  rounded-md "
                />
              </div>
            </fieldset>
            {/* Hover Image Input  */}
            <fieldset class="w-full space-y-1 text-black">
              <label for="files" class="block text-sm font-medium">
                Hover Image
              </label>
              <div class="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  class="w-full px-5 py-2 border border-gray-400  rounded-md "
                />
              </div>
            </fieldset>
            {/* Third Image Input  */}
            <fieldset class="w-full space-y-1 text-black">
              <label for="files" class="block text-sm font-medium">
                Third Image
              </label>
              <div class="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  class="w-full px-5 py-2 border border-gray-400  rounded-md "
                />
              </div>
            </fieldset>
            {/* Fourth Image Input  */}
            <fieldset class="w-full space-y-1 text-black">
              <label for="files" class="block text-sm font-medium">
                Fourth Image
              </label>
              <div class="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  class="w-full px-5 py-2 border border-gray-400  rounded-md "
                />
              </div>
            </fieldset>
            </div>

            <div>
              <button className="bg-[#FFAE00] p-2 w-full rounded-md text-2xl font-semibold font-markazi text-red-600">
                Submit Component
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
