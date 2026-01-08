// "use client";

import { server } from "../utility/utility";

export default function Client() {
  const serverFunction = server();
  return <>Client {serverFunction}</>;
}
