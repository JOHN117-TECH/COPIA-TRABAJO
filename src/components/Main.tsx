"use client";
interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {

  return (
    <main className={"mt-[var(--header-height)] mb-10 overflow-hidden"}>
      {children}
    </main>
  );
};

export default Main;