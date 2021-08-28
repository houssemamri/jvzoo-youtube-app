export const getchannelDetails = (id) => {
  return fetch(`http://localhost:5000/api/youtubeapiID/${id}`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};

export const getuserAllSubscribedChannels = (id) => {
  console.log(id);
  return fetch(`http://localhost:5000/api/youtubeapi/${id}`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};
