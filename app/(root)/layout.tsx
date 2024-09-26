
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <main className="flex flex-col h-full w-full">
        {children}
      </main>
    </html>
  );
}
