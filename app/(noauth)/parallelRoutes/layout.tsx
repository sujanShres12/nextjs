export default function ParallelLayout({
  children,
  notification,
  check,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  check: React.ReactNode;
}) {
  return (
    <>
      {check}
      <br />
      {notification}
      <br />
      {children}
    </>
  );
}
