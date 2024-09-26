export default function LayoutForm({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased `}>
        <div className=" flex justify-around items-center bg-[#1E2D3D] w-full h-[80px] text-[#888888]">
          <div className=" flex justify-around items-center  w-[550px] h-full  max-lg:hidden ">
            <div>Your startup</div>
            <span>{">"}</span>
            <div>Personal investment</div>
            <span>{">"}</span>
            <div>Resources</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
