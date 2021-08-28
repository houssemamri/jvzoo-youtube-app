import React, { useEffect, useRef, useState } from "react";
import { AddtoSubscribe } from "../actions/addsubscribedchannels";
import { GetSingleUserDetails, isAuth } from "../actions/auth";
import { NextVideo } from "../actions/videonext";
import { getuserAllSubscribedChannels } from "../actions/youtubeApi";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "react-fontawesome";
import { AddskippedChannels } from "../actions/addskippedchannels";

function Subscribing({ details }) {
  const [seconds, setSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remainingvideos, setRemainingVideos] = useState("");

  // console.log(isAuth().channelID);

  // console.log(video[1]);
  console.log(details);

  const newwin = () => {
    window.open(
      `https://www.youtube.com/watch?v=${details.videoUrl1}`,
      "",
      "width=600,height=400,left=200,top=200"
    );
  };

  function toggle() {
    setIsActive(!isActive);
    newwin();
  }

  function reset() {
    setSeconds(15);
    setIsActive(false);
  }

  const getThisUserDetails = async () => {
    const singleuserdetail = await GetSingleUserDetails({
      userid: isAuth()._id,
    });

    setRemainingVideos(singleuserdetail.videosRemaining);

    localStorage.setItem("user", JSON.stringify(singleuserdetail));
  };

  const setLocalstorage = () => {
    // localStorage.setItem("Subchannels", video);
  };

  const isSuborNot = async (id) => {
    setLoading(true);
    console.log(id);
    // if (!localStorage.getItem("Subchannels")) {
    //   console.log("Please refres the page");
    //   return;
    // }
    // let localvideo = localStorage.getItem("Subchannels");
    let localvideo = await getuserAllSubscribedChannels(id);
    console.log(JSON.stringify(localvideo));
    let localvideo1 = await JSON.stringify(localvideo);
    console.log(details.channelID);
    let is = localvideo1.indexOf(details.channelID);

    if (is !== -1) {
      setLoading(false);
      console.log(is);
      console.log("found");
      setIsFound(true);
      //To API to substract videosRemaining

      AddtoSubscribe({
        channelid: details.channelID,
        userid: isAuth()._id,
      })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });

      NextVideo({ userid: isAuth()._id })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });

      Router.reload();
    } else {
      setLoading(false);
      console.log("not found");
      setIsFound(false);
      // localStorage.removeItem("Subchannels");
    }
  };

  const SkipButton = async () => {
    console.log({ channelid: details.channelID, userid: isAuth()._id });
    //Skip channel and Add this channel to user skipchannelList
    AddskippedChannels({ channelid: details.channelID, userid: isAuth()._id })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    //show next channel
    //done
    //reload
    Router.reload();
  };

  useEffect(() => {
    //EveryTime i Reload it should update localStorage
    getThisUserDetails();
    // setLocalstorage();
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds <= 0) {
          setIsActive(false);
          reset();
          return;
        }

        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, remainingvideos]);

  return (
    // <div>
    //   <div>
    //     <div className="container mx-auto shadow-lg bg-gray-100 mt-5 p-4">
    //       <div className="text-center text-5xl font-bold my-6">
    //         Videos Remaining: 20
    //       </div>
    //       <div className="text-center text-lg font-bold mb-6">
    //         Next video in 13 sec
    //       </div>
    //       <div className="text-center bg-yellow-100 py-4 text-lg ">
    //         Do not close this popup else your account will be ban
    //       </div>
    //       <div className="text-center m-3">Like and subscribe the channel</div>
    //       <div className="lg:flex md:flex">
    //         <div className="  bg-white w-52 rounded-md shadow-2xl">
    //           <img
    //             src="/95233.jpg"
    //             alt=""
    //             className="w-40 lg:m-5 md:mt-8 md:ml-0"
    //           />
    //         </div>
    //         <div className="lg:flex md:flex lg:ml-40 md:ml-40 mt-2">
    //           <div className="m-8">
    //             <button className="bg-red-600 hover:bg-red-400 p-4 rounded-md text-white">
    //               Like & Subscribe
    //             </button>
    //           </div>
    //           <div className="m-8">
    //             <button className=" bg-green-600 hover:bg-green-400 p-4 rounded-md text-white">
    //               Confirm
    //             </button>
    //           </div>
    //           <div className="m-8">
    //             <button className="bg-yellow-300 hover:bg-yellow-200 p-4 rounded-md text-white">
    //               Skip
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    ////////////////////////////////
    <div>
      <div>
        <div className=" shadow-lg bg-gray-100 mt-10 mx-5 p-4">
          <div className="text-center text-5xl font-bold my-6">
            Videos Remaining: {!remainingvideos ? 20 : remainingvideos}
            {/* {isAuth().length} */}
            {/* {localStorage.getItem("user")} */}
          </div>
          <div className="text-center text-lg font-bold mb-6">
            Next video in {seconds} sec
          </div>
          <div className="text-center bg-yellow-100 py-4 text-lg ">
            Do not close this popup else your account will be ban
          </div>
          <div className="text-center m-3">Like and subscribe the channel</div>
          {/* /////////////////////// */}
          <div className="flex lg:flex-col">
            <div className="flex-1">
              <div className="  bg-white w-52 rounded-md shadow-2xl ml-10">
                <img src={details.videoimage1} alt="" className="w-auto " />
              </div>
            </div>
            {/* //////////////////////////// */}

            <div className="flex-1">
              <div className="flex lg:ml-6 sm:flex-col  mt-2">
                <div className="m-8 sm:m-4 sm:mt-6">
                  <button
                    disabled={isActive}
                    onClick={() => toggle()}
                    className={` ${
                      !isActive ? "bg-red-600 hover:bg-red-400" : "bg-gray-400"
                    }  p-4 rounded-md text-white`}
                  >
                    Like & Subscribe
                  </button>
                </div>
                <div className="m-8 sm:m-4">
                  <button
                    disabled={loading || isActive}
                    onClick={() => isSuborNot(isAuth().channelID)}
                    className={` ${
                      (!loading &&
                        !isActive &&
                        "bg-green-600 hover:bg-green-400") ||
                      "bg-gray-400"
                    }  p-4 rounded-md text-white but`}
                  >
                    {loading && (
                      <FontAwesome
                        className="super-crazy-colors"
                        name="refresh"
                        size="lg"
                        spin
                        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                      />
                    )}
                    Confirm
                  </button>
                </div>

                <div className="m-8 sm:m-4">
                  <button
                    onClick={() => SkipButton()}
                    className="bg-yellow-300 hover:bg-yellow-200 p-4 rounded-md text-white"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribing;
