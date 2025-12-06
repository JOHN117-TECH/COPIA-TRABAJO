"use client";

import Navigation from "./Navigation.header";
import HeaderActionsMenu from "./ActionsMenu.header";
import HeaderDropdownMobile from "./DropdownMobile.header";

import { useEffect, useState } from "react";
import { client } from "@/lib/apolloClient";
import { getCookie } from "@/hooks/getCookie";

/**
 * @description Header Initial component with logo, menu and search bar
 * @returns {React.ReactElement} Header component
 */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [user, setUser] = useState<string>("");
  const [isLoggedUser, setIsLoggedUser] = useState<boolean>(false);
  const [paragraphToSearch, setParagraphToSearch] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateUser = (event?: Event) => {
      const token = getCookie("userToken");
      const userInitials = getCookie("userInitials");

      if (token) {
        setUser(userInitials || "");
        setIsLoggedUser(true);
      } else {
        setUser("");
        setIsLoggedUser(false);
      }
    };

    updateUser();
    window.addEventListener("authChange", updateUser);

    return () => {
      window.removeEventListener("authChange", updateUser);
    };
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //Todo: Implementar busqueda
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setParagraphToSearch(event.target.value);
  };
  
  const handleSession = (type: "login" | "logout") => {
    if (type === "logout") {
      document.cookie = "userToken=; path=/; max-age=0";
      document.cookie = "userFullName=; path=/; max-age=0";
      document.cookie = "userInitials=; path=/; max-age=0";
      window.dispatchEvent(new CustomEvent("authChange", { detail: { logged: false } }));
      client.clearStore()
      setUser("");
      setIsLoggedUser(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Actions Bar */}
      <HeaderActionsMenu />
      <Navigation 
        user={user}
        isLoggedUser={isLoggedUser}
        handleSession={handleSession}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <HeaderDropdownMobile
          user={user}
          handleSearch={handleSearch}
          isLoggedUser={isLoggedUser}
          handleSession={handleSession}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;
