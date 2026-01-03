async function ProductID({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  let productId = (await params).productId;
  return <p>{productId}</p>;
}

export default ProductID;
