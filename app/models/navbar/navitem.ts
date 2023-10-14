export type TNavItem = {
    url: string, 
    title: string
}

export default class NavItem {
    public navItem: TNavItem;

    constructor(navItem: TNavItem) {
        this.navItem = navItem;
    }
    
    public get url(): string {
        return this.navItem.url;
    }

    public set url(url: string) {
        this.navItem.url = url;
    }

    public get title(): string {
        return this.navItem.title;
    }

    public set title(title: string) {
        this.navItem.title = title;
    }

    public static builder(): NavItemBuilder {
        return new NavItemBuilder();
    }
}

export class NavItemBuilder {
    public navItem: TNavItem;

    constructor() {
        this.navItem = {
            url: "#",
            title: ""
        }
    }

    public withUrl(url: string): NavItemBuilder {
        this.navItem.url = url;
        return this;
    }

    public withTitle(title: string): NavItemBuilder {
        this.navItem.title = title;
        return this;
    }

    public build(): NavItem {
        return new NavItem(this.navItem);
    }
}