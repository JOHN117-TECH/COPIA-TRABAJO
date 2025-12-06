"use client";

import clsx from "clsx";
import { useContext, useEffect, useRef, useState } from "react";
import DropdownProps from "@/models/dropdown.model";
import DropdownContext from "@/hooks/DropdownContext";

const Dropdown = ({
  children,
  className = "",
  hoverEnabled = false,
  showAsAPopup = false,
  customContext = false,
}: DropdownProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return customContext ? (
    <>
      <div
        role="select"
        className={clsx({
          [className]: className.length > 0,
        })}
        onMouseEnter={() => {
          hoverEnabled ? openDropdown() : "";
        }}
        onMouseLeave={() => {
          hoverEnabled ? closeDropdown() : "";
        }}
      >
        {children}
      </div>
    </>
  ) : (
    <DropdownContext.Provider
      value={{
        visible: dropdownVisible,
        toggle: toggleDropdown,
        open: openDropdown,
        close: closeDropdown,
        isPopup: showAsAPopup,
      }}
    >
      <div
        ref={dropdownRef} 
        role="select"
        className={clsx({
          "relative": showAsAPopup,
          [className]: className.length > 0,
        })}
        onMouseEnter={() => {
          hoverEnabled ? openDropdown() : "";
        }}
        onMouseLeave={() => {
          hoverEnabled ? closeDropdown() : "";
        }}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggle = ({
  children,
  className = "",
  hoverEnabled = false,
  onClick,
}: DropdownProps) => {
  const context = useContext(DropdownContext);

  return (
    <div
      className={clsx({
        "group w-full text-left text-(--gray-70) relative ": true,
        [className]: className.length > 0,
        "is-opened": context?.visible,
      })}
      onClick={(e) => {
        if (!hoverEnabled) {
          if (onClick) {
            onClick(e);
            context?.toggle();
          } else {
            e.stopPropagation();
            e.preventDefault();
            context?.toggle();
          }
        }
      }}
      data-dropdown-btn
    >
      {children}
    </div>
  );
};

Dropdown.Menu = ({
  children,
  className = "",
}: DropdownProps) => {
  const context = useContext(DropdownContext);

  return (
    <div
      role="listbox"
      data-dropdown-list
      className={clsx(
        "min-w-50 h-auto bg-white relative rounded-[16px] overflow-hidden py-2", 
        {
          ["hidden"]: !context?.visible,
          ["opened"]: context?.visible,
          "h-auto absolute! top-6 shadow-sm border border-(--gray-10) z-[9999]": context?.isPopup,
          [className]: className.length > 0,
        }
      )}
    >
      {children}
    </div>
  );
};

Dropdown.Item = ({
  children,
  className = "",
  onClick = () => {},
}: DropdownProps) => {

  return (
    <div
      data-dropdown-item
      onClick={onClick}
      className={clsx("bg-white hover:bg-(--aqua-00) text-(--black) px-[24px] text-base/5 py-[6px] whitespace-nowrap",{
        [className]: className.length > 0,
      })}
    >
      {children}
    </div>
  );
};

export default Dropdown;
