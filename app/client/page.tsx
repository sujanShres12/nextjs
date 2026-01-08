"use client";

import { clinetOnly } from "../utility/clientOnly";
// import { server } from "../utility/utility";

export default function Client() {
  const clientFunction = clinetOnly();
  return <>Client {clientFunction}</>;
}
