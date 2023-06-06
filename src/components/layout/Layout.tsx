type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col w-full items-center bg-LGray">
      {children}
    </main>
  );
};

export default Layout;
