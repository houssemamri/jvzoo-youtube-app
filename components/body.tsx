import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { PlanActivation } from "../actions/activation";
import { GetLocalStorage, isAuth } from "../actions/auth";
import Router from "next/router";

function Body() {
  const userInformation: any = GetLocalStorage("user");

  useEffect(() => {
    if (isAuth()?.planActivated == true) {
      Router.push(`/main/subscribingpage/${isAuth()._id}`);
    }
  }, []);

  const Activate = () => {
    //Add activate on user databse

    PlanActivation({ userid: userInformation?._id })
      .then((data) => {
        console.log(data);
        Router.push(`/main/subscribingpage/${isAuth()._id}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="flex md:flex-col-reverse" id="home">
        <div className="flex-1 p-10">
          <div className="text-4xl font-bold">
            Do you want FREE YouTube Subscribers & FREE YouTube Likes?
          </div>
          <div className="text-md font-bold text-gray-500 mt-4">
            Do you want more subscribers and likes engagement on your YouTube
            videos? Enter your YouTube channel URL to login and get started!
          </div>
          <div className="p-8">
            <Link to="offers" smooth={true}>
              <button className="bg-red-500 px-7 py-2 rounded-lg hover:bg-red-300">
                Get Free Subscribers Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 p-14">
          <img src="/you.png" />
        </div>
      </div>

      <div className="container mt-5 mx-auto px-2">
        <div className="2xl:flex md:flex-col">
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
            <div className="2xl:flex lg:flex-col 2xl:items-center">
              <div className="2xl:flex-shrink-0">
                <img
                  className="rounded-lg 2xl:w-64"
                  src="https://i.ibb.co/mJJNkTJ/img2.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 2xl:mt-0 2xl:ml-6">
                <div className="uppercase tracking-wide text-lg text-indigo-600 mt-4 font-bold">
                  WorldWide Audience
                </div>
                <a
                  href="/intro/commingsoon"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >
                  You can find audience from WorldWide
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
            <div className="2xl:flex lg:flex-col 2xl:items-center">
              <div className="2xl:flex-shrink-0">
                <img
                  className="rounded-lg 2xl:w-64"
                  src="https://i.ibb.co/w4wGYvQ/img1.jpg
  "
                  alt=""
                />
              </div>
              <div className="mt-4 2xl:mt-0 2xl:ml-6">
                <div className="uppercase tracking-wide text-lg text-indigo-600 mt-4 font-bold">
                  Genuine Subscribers
                </div>
                <a
                  href="/intro/commingsoon"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >
                  All Subscribers are real and Genuine So no need to worry of
                  bots.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-auto  w-screen p-7">
        <div className="2xl:flex flex-wrap 2xl:ml-14 xl:ml-0 " id="offers">
          <div>
            <div className="text-gray-700 text-center bg-gray-400 2xl:px-5 2xl:py-5 xl:px-10 xl:py-10 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0 my-10 sm:px-20  rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
              <div className="lg:flex-col lg:items-center">
                <div className="text-center">
                  <h2 className=" text-3xl font-bold">Free Plan</h2>
                </div>
                <div className="text-xs">
                  <p className="text-lg">
                    Gain <span className=" font-bold">25</span> Subscribers
                  </p>
                </div>
                <div className=" border-red-700 rounded">
                  <div className="text-center text-xl">SAVE_20%</div>
                  <div className=" text-center">In One Week</div>
                  <div className="text-center font-bold text-xl">$5</div>
                </div>

                <div>
                  <button
                    onClick={() => Activate()}
                    className="bg-red-600 rounded-lg text-white text-center p-4 mt-4 px-16 hover:bg-red-500"
                  >
                    Activate Now
                  </button>
                </div>
                <div className="text-center pt-7">
                  <div>Anytime Upgrade</div>
                  <div>Auto Subscribers</div>
                  <div>Gain 10 Subscribers</div>
                  <div>No need to Login</div>
                  <div>Anytime Redeem</div>
                  <div>Money back Guarantee</div>
                  <div>Duration: 1 Week</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-700 text-center bg-gray-400 2xl:px-5 2xl:py-5 xl:px-10 xl:py-10 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0 my-10 sm:px-20  rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
              <div className="lg:flex-col lg:items-center">
                <div className="text-center">
                  <h2 className=" text-3xl font-bold">Basic Plan</h2>
                </div>
                <div className="text-xs">
                  <p className="text-lg">
                    Gain <span className=" font-bold">25</span> Subscribers
                  </p>
                </div>
                <div className=" border-red-700 rounded">
                  <div className="text-center text-xl">SAVE_20%</div>
                  <div className=" text-center">In One Week</div>
                  <div className="text-center font-bold text-xl">$5</div>
                </div>

                <div>
                  <button
                    onClick={() => Router.push("/payment/5000")}
                    className="bg-red-600 rounded-lg text-white text-center p-4 mt-4 px-24 hover:bg-red-500"
                  >
                    Buy
                  </button>
                </div>
                <div className="text-center pt-7">
                  <div>Anytime Upgrade</div>
                  <div>Auto Subscribers</div>
                  <div>Gain 10 Subscribers</div>
                  <div>No need to Login</div>
                  <div>Anytime Redeem</div>
                  <div>Money back Guarantee</div>
                  <div>Duration: 1 Week</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-700 text-center bg-gray-400 2xl:px-5 2xl:py-5 xl:px-10 xl:py-10 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0 my-10 sm:px-20  rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
              <div className="lg:flex-col lg:items-center">
                <div className="text-center">
                  <h2 className=" text-3xl font-bold">Basic Plan</h2>
                </div>
                <div className="text-xs">
                  <p className="text-lg">
                    Gain <span className=" font-bold">25</span> Subscribers
                  </p>
                </div>
                <div className=" border-red-700 rounded">
                  <div className="text-center text-xl">SAVE_20%</div>
                  <div className=" text-center">In One Week</div>
                  <div className="text-center font-bold text-xl">$5</div>
                </div>

                <div>
                  <button
                    onClick={() => Router.push("/payment/7000")}
                    className="bg-red-600 rounded-lg text-white text-center p-4 mt-4 px-24 hover:bg-red-500"
                  >
                    Buy
                  </button>
                </div>
                <div className="text-center pt-7">
                  <div>Anytime Upgrade</div>
                  <div>Auto Subscribers</div>
                  <div>Gain 10 Subscribers</div>
                  <div>No need to Login</div>
                  <div>Anytime Redeem</div>
                  <div>Money back Guarantee</div>
                  <div>Duration: 1 Week</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-700 text-center bg-gray-400 2xl:px-5 2xl:py-5 xl:px-10 xl:py-10 2xl:mx-6 xl:mx-6 lg:mx-6 md:mx-6 sm:mx-0 my-10 sm:px-20  rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
              <div className="lg:flex-col lg:items-center">
                <div className="text-center">
                  <h2 className=" text-3xl font-bold">Basic Plan</h2>
                </div>
                <div className="text-xs">
                  <p className="text-lg">
                    Gain <span className=" font-bold">25</span> Subscribers
                  </p>
                </div>
                <div className=" border-red-700 rounded">
                  <div className="text-center text-xl">SAVE_20%</div>
                  <div className=" text-center">In One Week</div>
                  <div className="text-center font-bold text-xl">$5</div>
                </div>

                <div>
                  <button
                    onClick={() => Router.push("/payment/10000")}
                    className="bg-red-600 rounded-lg text-white text-center p-4 mt-4 px-24 hover:bg-red-500"
                  >
                    Buy
                  </button>
                </div>
                <div className="text-center pt-7">
                  <div>Anytime Upgrade</div>
                  <div>Auto Subscribers</div>
                  <div>Gain 10 Subscribers</div>
                  <div>No need to Login</div>
                  <div>Anytime Redeem</div>
                  <div>Money back Guarantee</div>
                  <div>Duration: 1 Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" container mx-auto mt-20">
          <div className="2xl:mx-60 lg:mx-0 lg:ml-14 md:ml-0">
            <div className="bg-indigo-600 max-w-3xl p-8 text-center">
              <div className="pb-4 text-white font-bold text-2xl">
                <div>30 Day money-back guarantee</div>
              </div>
              <div className="pb-4 text-gray-300">
                If in any case, you are not satisfied with our services, we’ll
                refund. Nothing to worry about.
              </div>
              <div>
                <Link to="home" smooth={true}>
                  <button className="bg-green-500 p-2 px-4 rounded hover:bg-green-200">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
