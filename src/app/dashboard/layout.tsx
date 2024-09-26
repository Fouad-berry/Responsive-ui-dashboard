import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-pink-200">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Image src="/logo.png" alt="logo" width={32} height={32}/>
                    <span className="hidden lg:block">AtypikHouse</span>
                </Link>
            </div>
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-200">R</div>
            {children}
        </div>
    );
  }
  