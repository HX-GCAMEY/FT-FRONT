import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from "flowbite-react";

function CustomNav() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <div className="relative object-contain w-10  h-10 mr-2">
          <Image
            src="/images/dragonflightwp.png"
            alt="Flowbite React Logo"
            className="rounded-full "
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pagina Demo
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>

        <NavbarLink as={Link} href="/events">
          Events
        </NavbarLink>

        <NavbarLink as={Link} href="/pokemon">
          Pokemons
        </NavbarLink>

        <Dropdown label="About" inline>
          <DropdownItem>
            <NavbarLink as={Link} href="/about/me" tabIndex={-1}>
              Me
            </NavbarLink>
          </DropdownItem>
          <DropdownItem>
            <NavbarLink as={Link} href="/about/you">
              you
            </NavbarLink>
          </DropdownItem>
        </Dropdown>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNav;
