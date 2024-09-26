import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { sidebarInvestorLinks } from "@/constants";
import Image from "next/image";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <main className='flex w-full h-full font-inter'>
        <Sidebar title='Portfolio' links={sidebarInvestorLinks} />

        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src='/icons/logo.svg' width={30} height={30} alt='logo' />
            <div>
              <MobileNav />
            </div>
          </div>
          {children}
        </div>
      </main>
          <Footer />
    </>
  );
}
