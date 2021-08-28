import React from "react";
import Link from "next/link";

function HyundaiCars() {
  return (
    <div>
      <Link href={`/`}>
        <button>Aura</button>
      </Link>
      <Link href={`/`}>
        <button>Creta</button>
      </Link>

      <Link href={`/`}>
        <button>Santro</button>
      </Link>
      <Link href={`/`}>
        <button>Venue</button>
      </Link>
    </div>
  );
}

export default HyundaiCars;
