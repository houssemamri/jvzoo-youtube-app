import React from "react";
import { Link } from "react-scroll";

function IntroPage() {
  return (
    <div>
      <div className=" h-96 bg-purple-400 lg:flex md:flex sm:flex" id="home">
        <div className=" lg:flex-1 md:flex-1 pl-28 lg:pt-20 md:pt-20">
          <div className="lg:invisible md:invisible sm:invisible lg:-mt-36 md:-mt-36 sm:-mt-36">
            <img src="/you.png" className="-ml-20" />
          </div>
          <div>
            <h1 className="lg:text-4xl md:text-4xl font-bold">
              80% OFF on Gold Plan
            </h1>
          </div>
          <div>
            <h2 className="lg:text-xl md:text-xl sm:text-sm font-bold mt-3">
              everything you need to stay on Youtube
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2  max-w-3xl mt-3">
            <div className="mt-2">Auto Subscribers</div>
            <div className="mt-2">Cheapest and Best Service</div>
            <div className="mt-2">Well Optimized</div>
            <div className="mt-2">Lightning Fast Subscribers</div>
          </div>
          <div>
            <Link to="offers" smooth={true}>
              <button className="mt-9 p-3 bg-blue-700 rounded  text-white w-44 text-center hover:bg-indigo-300">
                View Plans
              </button>
            </Link>
          </div>

          <div className="text-xs">30 Days money back guarantee</div>
        </div>
        <div className="flex-1 lg:visible md:visible invisible">
          <img src="/you.png" className=" mt-32 pr-24" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="text-center  my-20 font-bold text-xl">
          <h2 className="text-4xl bg-red-400 rounded-lg p-5 text-white">
            Comming Soon...
          </h2>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="text-center  my-20 font-bold text-xl">
          <h2 className="text-4xl bg-gray-500 rounded-lg p-5 text-white">
            Pick a Plan & Gain Subscribers in minutes
          </h2>
        </div>
      </div>

      <div className="container mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src="https://i.ibb.co/mJJNkTJ/img2.jpg"
                  alt=""
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
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
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img
                  className="rounded-lg lg:w-64"
                  src="https://i.ibb.co/w4wGYvQ/img1.jpg
  "
                  alt=""
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
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

      <div className="container mt-5 mx-auto px-2" id="offers">
        <div className="md:flex">
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 mx-6 mt-4 rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
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
                <button className="bg-red-600 rounded-lg text-white text-center p-4 mt-4 px-10 hover:bg-red-500">
                  Comming Soon...
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
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 mx-6 mt-4 rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
            <div className="lg:flex-col lg:items-center">
              <div className="text-center">
                <h2 className=" text-3xl font-bold">Gold Plan</h2>
              </div>
              <div className="text-xs">
                <p className="text-lg">
                  Gain <span className="font-bold">50</span> Subscribers
                </p>
              </div>
              <div className=" border-red-700 rounded">
                <div className="text-center text-lg">SAVE_80%</div>
                <div className=" text-center">In one Week</div>
                <div className="text-center text-xl font-bold">$10</div>
              </div>

              <div>
                <button className="bg-red-600 text-white text-center p-4 mt-4 px-10 hover:bg-red-500">
                  Comming Soon...
                </button>
              </div>
              <div className="text-center pt-7">
                <div>Anytime Upgrade</div>
                <div>Auto Subscribers</div>
                <div>Gain 50 Subscribers</div>
                <div>No need to Login</div>
                <div>Anytime Redeem</div>
                <div>Money back Guarantee</div>
                <div>Duration: 1 Week</div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 mx-6 mt-4 rounded transform hover:scale-110 motion-reduce:transform-none hover:shadow-2xl">
            <div className="lg:flex-col lg:items-center">
              <div className="text-center">
                <h2 className=" text-3xl font-bold">Platinum Plan</h2>
              </div>
              <div className="text-lg">
                <p className="text-xl">
                  Gain <span className="font-bold text-xl">100</span>{" "}
                  Subscribers
                </p>
              </div>
              <div className=" border-red-700 rounded">
                <div className="text-center text-lg">SAVE_80%</div>
                <div className=" text-center">In One Month</div>
                <div className="text-center font-bold text-xl">$20</div>
              </div>

              <div>
                <button className="bg-red-600 text-white text-center p-4 mt-4 px-10 hover:bg-red-500">
                  Comming Soon...
                </button>
              </div>
              <div className="text-center pt-7">
                <div>Anytime Upgrade</div>
                <div>Auto Subscribers</div>
                <div>Gain 100 Subscribers</div>
                <div>No need to Login</div>
                <div>Anytime Redeem</div>
                <div>Money back Guarantee</div>
                <div>Duration: 1 Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="bg-indigo-600 max-w-3xl lg:ml-56 md:ml-56 p-8 text-center">
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
  );
}

export default IntroPage;
