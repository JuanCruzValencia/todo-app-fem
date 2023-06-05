type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col w-full items-center bg-LGray">
      <div className="flex w-full max-w-[400px] items-center justify-between">
        <h1 className="uppercase">todo</h1>
        <span>darkmode icon</span>
      </div>
      {children}
    </main>
  );
};

export default Layout;
