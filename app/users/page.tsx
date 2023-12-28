import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[url('/homePage/bg_home.png')]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-6 gap-1 bg-[#fff] drop-shadow-xl bg-opacity-80 ">
            <div className="col-span-2">
              <img
                src="./homePage/main_img.png"
                alt="main img"
                className="px-8 py-8"
              />
            </div>

            <div className="flex items-center justify-center pr-12 col-span-4">
              <div className="grid grid-cols-2 gap-4 w-[800px]">
                <div></div>
                <div>
                  <p className="text-center text-[#E46E8A] text-[30px]">
                    Find Your Partner
                  </p>
                </div>
                <div>
                  <p>Im a</p>
                </div>

                <div>
                  <select className="select select-bordered w-full ">
                    <option disabled selected>
                      Select your gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <p>Looking for</p>
                </div>

                <div>
                  <select className="select select-bordered w-full ">
                    <option disabled selected>
                      Looking for
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <p>Ethnicity</p>
                </div>

                <div>
                  <select className="select select-bordered w-full ">
                    <option disabled selected>
                      Select your Ethnicity
                    </option>
                    <option>Sinhala</option>
                    <option>Tamil</option>
                    <option>Muslim</option>
                    <option>Burgher</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <p>Age</p>
                </div>

                <div>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <select className="select select-bordered w-max">
                        {Array.from({ length: 73 }, (_, index) => (
                          <option key={index + 18}>{index + 18}</option>
                        ))}
                      </select>
                      <p>to</p>
                      <select className="select select-bordered w-max">
                        {Array.from({ length: 73 }, (_, index) => (
                          <option key={index + 18}>{index + 18}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <p>Civil status</p>
                </div>

                <div>
                  <select className="select select-bordered w-full ">
                    <option>Never Married</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                    <option>Separated</option>
                    <option>Other</option>
                  </select>
                </div>
                <div></div>
                <div>
                  <button className="btn bg-[#E46E8A] w-full">
                    Quick Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
