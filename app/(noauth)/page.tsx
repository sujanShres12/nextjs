
import ClientComp from "./Client";

export default async function Home() {
  const a: number = 10;

  const b = () => {
    console.log("triggered");
  };

  return (
    <>
      <ClientComp a={a} />
      <p>Welcome noauth</p>
    </>
  );
}
