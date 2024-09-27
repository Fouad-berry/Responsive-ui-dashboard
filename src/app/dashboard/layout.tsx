import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/logo.png" alt="logo" width={40} height={40}/>
                    <span className="hidden lg:block">AtypikHouse</span>
                </Link>
                <Menu/>
            </div>
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]"></div>
            {children}
        </div>
    );
  }
  