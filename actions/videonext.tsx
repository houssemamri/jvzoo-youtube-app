// http://localhost:5000/api/nextvideo
// http://localhost:5000/api/activateplan

export const NextVideo = (Userid) => {
  //   console.log(Userid);
  return fetch(`http://localhost:5000/api/nextvideo`, {
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
