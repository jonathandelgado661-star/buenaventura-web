export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Patulul", href: "/patulul" },
  { label: "Río Bravo", href: "/rio-bravo" },
  { label: "Tecpán", href: "/tecpan" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav: NavLink[] = mainNav;
