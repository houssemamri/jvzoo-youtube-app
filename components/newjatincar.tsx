import React from "react";
import Link from "next/link";

function NewJatinCar() {
  return (
    <div>
      <button>Maruti</button>
      <Link href={"/hyundaicars"}>
        <button>Hyundai</button>
      </Link>
      <button>Tata</button>
    </div>
  );
}

export default NewJatinCar;
