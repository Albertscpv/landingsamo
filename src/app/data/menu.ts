// Menú de Soda 506 tomado de las piezas gráficas publicadas (precios en colones).
export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const businessInfo = {
  name: "Soda 506",
  place: "San Antonio de Escazú",
  phone: "8429-6672",
  instagram: "@soda506",
  note: "Contamos con servicio express",
};

export const menu: MenuCategory[] = [
  {
    title: "Combos",
    items: [
      {
        id: "combo-1",
        name: "Combo 1",
        description: "Hamburguesa, papas y un taco.",
        price: 2300,
      },
    ],
  },
  {
    title: "Hamburguesas artesanales",
    items: [
      { id: "art-sencilla", name: "Artesanal sencilla", price: 4000 },
      { id: "art-doble", name: "Artesanal doble", price: 5000 },
    ],
  },
  {
    title: "Hamburguesas de filet de pollo",
    items: [
      { id: "pollo-sencilla", name: "Filet de pollo sencilla", price: 2300 },
      { id: "pollo-especial", name: "Filet de pollo especial", price: 2500 },
      { id: "pollo-doble", name: "Filet de pollo doble", price: 3500 },
    ],
  },
  {
    title: "Alitas",
    items: [
      {
        id: "alitas",
        name: "Alitas de pollo",
        description: "Salsa a elegir: BBQ, mostaza miel o buffalo.",
        price: 4000,
      },
    ],
  },
  {
    title: "Ceviche",
    items: [
      { id: "ceviche-normal", name: "Ceviche normal", price: 3000 },
      { id: "ceviche-mixto", name: "Ceviche mixto", price: 4500 },
    ],
  },
];

export const formatColones = (n: number) => `₡${n.toLocaleString("es-CR")}`;
