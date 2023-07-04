import { MenuSubitem } from './menu-subitem';

export interface MenuItem {
    name: string;
    price?: number;
    imageUrl?: string;
    subitems?: MenuSubitem[];
}
