import { category } from "configs/config";

export const menus = category;
// eslint-disable-next-line camelcase
export const mainMenus = category.filter(({ parent_id }) => !parent_id);
export const footerMenus = category.filter(({ footer }) => footer);
