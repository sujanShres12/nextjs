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

  return (
    <>
      <p>{productId}</p>
    </>
  );
}

export default ProductID;
