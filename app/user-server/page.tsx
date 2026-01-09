import axios from "axios";
import { User } from "@/types/Fetching";

export default async function UserServer() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data: User[] = response?.data;
  return (
    <>
      {data.map((user) => {
        return (
          <span key={user.id}>
            <div>
              Name:
              <span>{user.name}</span>
              Email:
              <span>{user.email}</span>
            </div>
          </span>
        );
      })}
    </>
  );
}
