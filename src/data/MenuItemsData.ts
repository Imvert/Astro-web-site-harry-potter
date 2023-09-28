import type { MenuItem } from "../types/types";

const dev = "/site-hp";
const prod = "/Astro-web-site-harry-potter";

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: `${prod}/`,
    icon: "",
  },
  {
    title: "FAQ",
    url: `${prod}/faq`,
    icon: "",
  },
  {
    title: "Blog",
    url: `${prod}/blog`,
    icon: "",
  },
];

export default menuItems;
