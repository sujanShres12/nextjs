import { Metadata } from "next";
type props = {
  params: Promise<{ productId: number }>;
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  let productId = (await params).productId;
  return {
    title: `${productId}`,
  };
};

async function ProductID({ params }: props) {
  let productId = (await params).productId;
  const i = Math.ceil(Math.random()*10);
  if (i < 8) {
    throw new Error("checking");
  }
  return (
    <>
      <p>{productId}</p>
    </>
  );
}

export default ProductID;
