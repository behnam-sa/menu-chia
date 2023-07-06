import { MenuSubitem } from './menu-subitem';

export interface MenuItem {
    name: string;
    price?: number;
    description?: string;
    imagePath?: string;
    subitems?: MenuSubitem[];
}
