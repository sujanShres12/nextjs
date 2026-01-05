import { redirect } from "next/navigation";

export default async function Product() {
  // const time = new Promise((re, rej) => {
  //   setTimeout(() => {
  //     re("done");
  //   }, 1000);
  // });
  redirect("product/1");
}
