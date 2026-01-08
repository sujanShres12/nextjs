import { server } from "../utility/utility";

export default function Server() {
  const serverFunction = server();
  return <>Server {serverFunction}</>;
}
