import { MenuItem } from './menu-item';

export interface MenuSection {
    caption: string;
    iconPath: string;
    items: MenuItem[];
}
