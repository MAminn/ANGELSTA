import Footer from "@/components/Footer";
// import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
// import Image from "next/image";
import { auth, signIn } from "@/auth";
import { SidebarStartupLinks } from "@/server/constants";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return signIn(); // Redirect to sign-in if not authenticated
  }

  return (
    <>
      <main className="flex w-full h-screen font-inter  pt-20">
        <Sidebar links={SidebarStartupLinks} />

        <div className="flex size-full flex-col">
          {/* <div className="root-layout fixed top-0 left-0 w-full h-[100px] bg-[#1E2D3D]">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div>
              <MobileNav session={session} />
            </div>
          </div> */}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
