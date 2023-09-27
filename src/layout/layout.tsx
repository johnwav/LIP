import Header from "../components/Header";
import SideNav from "../components/SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <main className="ml-[72px] p">
        <nav>
          <Header />
        </nav>
        <div className="p-[32px]">{children}</div>
      </main>
      <aside className="w-[72px] h-full fixed top-0 left-0">
        <SideNav />
      </aside>
    </div>
  );
};

export default Layout;
