export interface MenuItem {
    name: string;
    price: number;
    subItems?: MenuItem[];
}
