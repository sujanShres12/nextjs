async function ReviewId({
  params,
}: {
  params: Promise<{ reviewId: number; productId: number }>;
}) {
  const { reviewId, productId } = await params;
  return (
    <p>
      {reviewId} {productId}
    </p>
  );
}
export default ReviewId;
