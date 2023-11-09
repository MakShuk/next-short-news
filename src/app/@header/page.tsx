import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import SwitchTheme from "../components/buttons/switch-theme";

export default function App() {
  return (
    <Navbar shouldHideOnScroll className="bg-white dark:bg-black">
      <NavbarBrand>
        <p className="font-bold text-inherit text-sky-600 dark:text-neutral-300">
          SHORT.NW
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
