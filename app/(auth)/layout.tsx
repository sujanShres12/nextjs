export default function RootAuthLayout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  let isLogin = true;
  return isLogin ? <>{children}</> : login;
}
