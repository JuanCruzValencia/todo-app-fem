type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col">
      <div>{children}</div>
    </main>
  );
};

export default Layout;
