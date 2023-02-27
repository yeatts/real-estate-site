export interface INavItem {
    url?: string, 
    name?: string
}

export default class NavItem {
    url!: string;
    name!: string;

    constructor(navItem: INavItem) {
        if (!navItem) {
            throw new Error("Cannot construct NavItem from falsey INavItem");
          }      

        this.url = navItem.url || "";
        this.name = navItem.name || "";
    }

    public static empty(): NavItem {
        return new NavItem({});
      }    
}