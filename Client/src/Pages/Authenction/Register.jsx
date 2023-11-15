import React, { useState } from 'react'
import logo from "../../assets/Logo/logo.svg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  return (
    <div>
        <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-100 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://i.ibb.co/tPQngDq/register-image.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </section>

          <main className="flex  justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative  ">
                <h1 className=" text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Don’t have an account?
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
                </p>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type="text"
                      id="FirstName"
                      placeholder="FirstName"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      First Name
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type="text"
                      id="LastName"
                      placeholder="LastName"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute font-medium  start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Last Name
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="password"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password
                    </span>

                    <span
                      className="absolute top-3 end-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {/* Add your eye icon here */}
                      {showPassword ? (
                        <FaEye size={18} />
                      ) : (
                        <FaEyeSlash size={18} />
                      )}
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
                  >
                    <input
                     type={showConfirmPassword ? "text" : "password"}
                      id="PasswordConfirmation"
                      placeholder="PasswordConfirmation"
                      className="peer h-8 w-full border-none bg-white p-0 placeholder-transparent outline-none sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 font-medium -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password Confirmation
                    </span>
                    <span
                      className="absolute top-3 end-3 cursor-pointer"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {/* Add your eye icon here */}
                      {showConfirmPassword ? (
                        <FaEye size={18} />
                      ) : (
                        <FaEyeSlash size={18} />
                      )}
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our 
                    <Link className="text-gray-700 px-1 underline">
                      terms and conditions
                    </Link>
                    and
                    <Link  className="text-gray-700 pl-1 underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className={`inline-block shrink-0 rounded-md border ${
            isCheckboxChecked
              ? "border-[#B63155] bg-[#B63155] hover:bg-transparent hover:text-[#B63155]"
              : "border-gray-300 bg-gray-300 cursor-not-allowed"
          } px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-blue-500`}
          disabled={!isCheckboxChecked}>
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to='/sign-in' className="text-gray-700 pl-2 underline">
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}

export default Register