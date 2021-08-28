import React, { useEffect, useState } from "react";
import Subscribing from "../../components/subscribing";
import channels from "../../public/channels.json";
import { getchannelDetails } from "../../actions/youtubeApi";
import { GetAllchannelsregister } from "../../actions/getallchannelsregister";
import { GetSingleUserDetails, isAuth } from "../../actions/auth";

function SubscribingPage({ channeldetails }) {
  useEffect(() => {
    // console.log(isAuth());
  }, []);
  const [video, setVideo] = useState([]);

  return (
    <div>
      <Subscribing details={channeldetails} />
    </div>
  );
}

SubscribingPage.getInitialProps = async () => {
  let chalist = [];

  let newdata = await GetAllchannelsregister();

  await newdata.channels.map((c, i) => {
    chalist.push(c);
  });

  if (process.browser) {
    let isau: any = localStorage.getItem("user");
    console.log(isau);
  }

  const userdetail = await GetSingleUserDetails({
    userid: "6096e145184be5293cf04ed8",
  });
  //6096e145184be5293cf04ed8
  let remaining = userdetail.subscribedChannels.length;

  console.log(chalist);

  return getchannelDetails(chalist[remaining]).then((data) => {
    console.log("ttttttttttttt");

    if (!data) {
      return false;
    } else {
      return { channeldetails: data };
    }
  });
};

export default SubscribingPage;
