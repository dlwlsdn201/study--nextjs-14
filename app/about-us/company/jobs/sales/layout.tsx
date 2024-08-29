const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>This layout is of sales</div>
      {children}
    </div>
  );
};

export default Layout;
