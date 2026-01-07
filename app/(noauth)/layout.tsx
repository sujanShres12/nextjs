export const metadata = {
  title: "noauth",
  description: "hello noauth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
