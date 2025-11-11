"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from "flowbite-react";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import {brands} from "data/data";

function Nav() {
  return (
    <Navbar
      fluid
      rounded
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <NavbarBrand>
        <Image src={logo} width={90} height={90} alt="logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          Sobre nosotros
        </NavbarLink>
        <NavbarLink as={Link} href="/services">
          Servicios
        </NavbarLink>

        <Dropdown label="Productos" arrowIcon={true} inline>
          {brands.map((brand) => {
            return (
              <DropdownItem href={`/brands/${brand.tag}`} key={brand.id}>
                {brand.name}
              </DropdownItem>
            );
          })}
          {/* <DropdownItem href="/brands/grassetto">Grassetto</DropdownItem>
          <DropdownItem href="/brands/inal">Inal</DropdownItem>
          <DropdownItem href="/brands/cagnoli">Cagnoli</DropdownItem>
          <DropdownItem href="/brands/union-ganadera">
            Union Ganadera
          </DropdownItem>
          <DropdownItem href="/brands/el-silencio">El Silencio</DropdownItem> */}
        </Dropdown>
        <NavbarLink href="/contact">Contacto</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Nav;
