"use client";
import Client2 from "./Client2";

export default function ClientComp(props: { a: number }) {
  const a = () => {
    console.log("asdasd");
  };
  return (
    <Client2 a={a}>
      {props.a}
      Client
    </Client2>
  );
}
