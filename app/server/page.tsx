import { server } from "../utility/utility";
import { clinetOnly } from "../utility/clientOnly";

export default function Server() {
  const serverFunction = server();
  // const clientFunction = clinetOnly();
  return <>Server {serverFunction}</>;
}
