export default function RootAuthLayout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  let isLogin = false;
  return isLogin ? <>{children}</> : login;
}
