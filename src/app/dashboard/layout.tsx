export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w[8%] lg:w-[16%] xl:w-[14%] bg-pink-200">Left</div>
            <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-gray-200">Right</div>
            {children}
        </div>
    );
  }
  