export type CatalogCategory =
  | "action"
  | "layout"
  | "status"
  | "form"
  | "navigation"
  | "feedback"
  | "overlay"
  | "data-display";

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  "action",
  "layout",
  "status",
  "form",
  "navigation",
  "feedback",
  "overlay",
  "data-display",
];

export type CatalogEntry = {
  category: CatalogCategory;
  id: string;
  name: string;
  description: string;
  tags: string[];
  componentId: string;
};
