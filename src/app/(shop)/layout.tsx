import { TopMenu } from "@/components/ui";
import SideBar from "@/components/ui/sidebar/SideBar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-h-screen">
      <TopMenu />
      <SideBar />
      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
}
