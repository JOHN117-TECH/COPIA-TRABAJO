"use client";

import TabsContext from "@/utilities/context/TabsContext";
import clsx from "clsx";
import {
  Children,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface TabsProps extends PropsWithChildren {}

interface TabProps extends PropsWithChildren {
  value: string;
}

export const Tabs = ({ children }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabsHeader = ({ children }: TabsProps) => {
  const context = useContext(TabsContext);
  const firstTab: any = Children.toArray(children).at(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Set primer tab activo
  useEffect(() => {
    if (context?.currentTab === "" && firstTab) {
      context?.setCurrentTab(firstTab?.props?.value);
    }
  }, []);

  // Detecta si hay overflow
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center">
      {canScrollLeft && (
        <button
          className="absolute left-0 z-10 h-full pl-1 pr-21 bg-gradient-to-r from-white to-transparent"
          onClick={() => scrollByAmount(-150)}
        >
          <i className="icon-chevron-left text-(--btn-outlined-border)" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide w-full"
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          className="absolute right-0 z-10 h-full pl-21 pr-1 bg-gradient-to-l from-white to-transparent"
          onClick={() => scrollByAmount(150)}
        >
          <i className="icon-chevron-right text-(--btn-outlined-border)" />
        </button>
      )}
    </div>
  );
};

export const Tab = ({ children, value }: TabProps) => {
  const context = useContext(TabsContext);

  return (
    <div
      onClick={() => context?.setCurrentTab(value)}
      className={clsx({
        "border-(--aqua-light) border-b-[4px] bg-(--white) text-(--black) font-medium":
          value == context?.currentTab,
        "border-(--gray-30)": value != context?.currentTab,
        "border-b flex-1 min-w-[200px] flex justify-center items-center text-(--gray-90) text-sm py-4 px-5 cursor-pointer rounded-t-2xl whitespace-nowrap":
          true,
      })}
    >
      {children}
    </div>
  );
};

export const TabsBody = ({ children }: TabsProps) => {
  return <>{children}</>;
};

export const TabPanel = ({ children, value }: TabProps) => {
  const context = useContext(TabsContext);

  return (
    <div
      className={clsx({
        hidden: value != context?.currentTab,
        "w-full px-0 md:px-10 py-8 bg-(--white)": true,
      })}
    >
      {children}
    </div>
  );
};
