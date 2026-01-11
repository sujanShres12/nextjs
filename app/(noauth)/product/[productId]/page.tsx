import axios from "axios";
import { Metadata } from "next";
type props = {
  params: Promise<{ productId: number }>;
};
export const dynamicParams = false;
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  let productId = (await params).productId;
  return {
    title: `${productId}`,
  };
};

export async function generateStaticParams(): Promise<{ productId: string }[]> {
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

async function ProductID({ params }: props) {
  let productId = (await params).productId;
  let data: { title: string } = (await axios.get("http://localhost:3000/api"))
    ?.data;
  return (
    <>
      {data.title}
      <p>{productId}</p>
    </>
  );
}

export default ProductID;
