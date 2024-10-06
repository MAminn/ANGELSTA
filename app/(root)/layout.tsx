export default function RootPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="flex flex-col h-full w-full">{children}</section>;
}
