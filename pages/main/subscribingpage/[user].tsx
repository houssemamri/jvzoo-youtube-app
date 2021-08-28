import React, { useEffect, useState } from "react";
import Subscribing from "../../../components/subscribing";
import channels from "../../../public/channels.json";
import { getchannelDetails } from "../../../actions/youtubeApi";
import { GetAllchannelsregister } from "../../../actions/getallchannelsregister";
import { GetSingleUserDetails, isAuth } from "../../../actions/auth";
import Example from "../../../components/header";
import Example1 from "../../../components/header2";

function SubscribingPage({ channeldetails }) {
  console.log(channeldetails);
  useEffect(() => {
    // console.log(isAuth());
  }, []);
  const [video, setVideo] = useState([]);

  return (
    <div>
      <Example />
      {/* <Example1 /> */}
      <Subscribing details={channeldetails} />
    </div>
  );
}

SubscribingPage.getInitialProps = async ({ query }) => {
  let chalist = [];

  let newdata = await GetAllchannelsregister();

  await newdata.channels.map((c, i) => {
    chalist.push(c);
  });

  const userdetail = await GetSingleUserDetails({
    userid: query.user,
  });
  // console.log(userdetail);
  //6096e145184be5293cf04ed8
  let subchannellength = userdetail.subscribedChannels.length;
  let skippedchannellength = userdetail.skippedChannels.length;

  console.log(subchannellength);

  console.log(chalist);

  return getchannelDetails(
    chalist[subchannellength + skippedchannellength]
  ).then((data) => {
    console.log("ttttttttttttt");

    if (!data) {
      return false;
    } else {
      return { channeldetails: data };
    }
  });
};

export default SubscribingPage;
