export interface INavItem {
    url?: string, 
    title?: string
}

export default class NavItem {
    url!: string;
    title!: string;

    constructor(navItem: INavItem) {
        if (!navItem) {
            throw new Error("Cannot construct NavItem from falsey INavItem");
          }      

        this.url = navItem.url || "";
        this.title = navItem.title || "";
    }

    public static empty(): NavItem {
        return new NavItem({});
      }    
}