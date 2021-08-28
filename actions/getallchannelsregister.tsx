export const GetAllchannelsregister = () => {
  return fetch(`http://localhost:5000/api/channels`, {
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
