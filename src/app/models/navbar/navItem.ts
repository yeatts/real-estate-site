export type NavItemType = {
    url?: string, 
    title?: string
}

export default class NavItem {
    public url!: string;
    public title!: string;

    constructor(navItem: NavItemType) {
        if (!navItem) {
            throw new Error("Cannot construct NavItem from falsey NavItemType");
          }      

        this.url = navItem.url || "";
        this.title = navItem.title || "";
    }

    public static empty(): NavItem {
        return new NavItem({});
      }    
}