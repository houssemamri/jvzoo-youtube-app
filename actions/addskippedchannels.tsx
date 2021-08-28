export const AddskippedChannels = (Userid) => {
  console.log(Userid);
  return fetch(`http://localhost:5000/api/addskippedchannel`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Userid),
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => console.log(err));
};
