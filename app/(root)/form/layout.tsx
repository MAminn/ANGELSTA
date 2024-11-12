import { auth, signIn } from "@/auth";

export default async function LayoutForm({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    return signIn();
  }

  return (
    <section className={` antialiased `}>
      <div className=" flex justify-around items-center fixed top-0 left-0 bg-[#1E2D3D] w-full h-[80px] text-[#888888] z-20">
        <div className=" flex justify-around items-center  w-[550px] h-full  max-lg:hidden ">
          <div>Your startup</div>
          <span>{">"}</span>
          <div>Personal investment</div>
          <span>{">"}</span>
          <div>Resources</div>
        </div>
      </div>
      {children}
    </section>
  );
}
