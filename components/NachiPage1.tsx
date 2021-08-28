import React, { useEffect, useState } from "react";

function NachiPage() {
  const [values, setValues]: any = useState({
    formdata: "",
  });

  const [number1, setNumber1] = useState([]);

  const { formdata } = values;

  useEffect(() => {
    setValues({ ...values, formdata: new FormData() });
    console.log(number1);
    console.log(number1.length);
  }, [number1]);

  const handleCategoryToggle = (number) => {
    console.log(number);
    const all = [...number1];
    const checkedNumber = number1.indexOf(number);

    if (checkedNumber === -1) {
      all.push(number);
    } else {
      all.splice(checkedNumber, 1);
    }
    setNumber1(all);
    formdata.set("formnumber", all);
    // console.log(number1);
  };

  const isToggleCategory = (num) => {
    if (number1.includes(num)) {
      return true;
    } else {
      return false;
    }
  };

  const handlebet = () => {
    console.log(number1);
  };
  const ismorenumber = () => {
    console.log(number1.length);
    if (number1.length >= 10) {
      return true;
    } else {
      return false;
    }
  };

  const reset = () => {
    console.log("PRESSSSS");
  };

  return (
    <div className="min-h-screen bg-gray-500 py-6 flex flex-row flex-wrap justify-center sm:py-12">
      <div>
        <div className="bg-gradient-to-t from-black via-green-900 to-green-700 hover:to-gray-50 hover:via-gray-600 h-64 px-96 mx-32 rounded-2xl shadow-2xl relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
          <div className="transform  align-middle text-5xl  font-bold text-gray-200 text-center m-auto md:m-0 md:mt-8">
            Mines
          </div>
        </div>
      </div>
      <div className="flex space-x-4 px-4 justify-around">
        <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 hover:to-gray-50 hover:via-gray-600 h-64 w-96 rounded-2xl shadow-2xl relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
          <div className="transform  align-middle text-5xl  font-bold text-gray-200 text-center m-auto md:m-0 md:mt-8">
            Mines
          </div>
        </div>
      </div>

      <div className="flex space-x-4 px-4 justify-around">
        <div className="bg-gradient-to-t from-black via-blue-900 to-blue-700 hover:to-gray-50 hover:via-gray-600 h-64 w-96 rounded-2xl shadow-2xl relative flex flex-col items-center justify-between md:items-start   md:p-5 transition-all duration-150">
          <div className="transform  align-middle text-5xl  font-bold text-gray-200 text-center m-auto md:m-0 md:mt-8">
            Dice
          </div>
        </div>
      </div>
      <div className="flex space-x-4 px-4 justify-around">
        <div className="bg-gradient-to-t from-black via-yellow-900 to-yellow-700 hover:to-gray-50 hover:via-gray-600 h-64 w-96 rounded-2xl shadow-2xl relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
          <div className="text-7xl -ml-60 hover:text-gray-600 font-bold text-white">
            SC
          </div>
          <div className="transform  align-middle text-5xl  font-bold text-gray-200 text-center m-auto md:m-0 mt-2">
            Scratch
          </div>
        </div>
      </div>
    </div>
  );
}

export default NachiPage;
