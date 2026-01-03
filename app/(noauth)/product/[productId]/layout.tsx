import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <p>product sujan</p>
      <Link href={"/"}>Home</Link>
    </>
  );
}
