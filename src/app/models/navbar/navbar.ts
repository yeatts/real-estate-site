// use file to link content to components.
import NavItem, { TNavItem } from './navitem';

export type TNavbar = {
  navDisplayName: string,
  navItems: NavItem[], 
  leftNavItems: TNavItem[],
  rightNavItems: TNavItem[]
}

export default class Navbar {
  public navbar: TNavbar;

  constructor(navbar: TNavbar) {
    this.navbar = navbar; 
  }
  
  public get navDisplayName(): string {
    return this.navbar.navDisplayName
  }
  
  public get navbarItems(): NavItem[] {
    return this.navbar.navItems;
  }

  public get leftNavItems(): TNavItem[] {
    const itemCount = this.navbar.navItems.length
    this.navbar.leftNavItems = this.navbar.navItems.slice(0, Math.floor(itemCount / 2)).map((item): TNavItem => {
      return {
        url: item.url,
        title: item.title
      }
    })
    return this.navbar.leftNavItems
  }

  public get rightNavItems(): TNavItem[] {
    const itemCount = this.navbar.navItems.length
    this.navbar.rightNavItems = this.navbar.navItems.slice(Math.floor(itemCount / 2), itemCount).map((item): TNavItem => {
      return {
        url: item.url,
        title: item.title
      }
    })
    return this.navbar.rightNavItems
  }
  
  public static builder(): NavbarBuilder {
    return new NavbarBuilder();
  }
}

export class NavbarBuilder {
  public navbar: TNavbar;

  constructor() {
    this.navbar = {
      navDisplayName: '',
      navItems: [],
      leftNavItems: [],
      rightNavItems: []
    }
  }

  public withNavDisplayName(navDisplayName: string): NavbarBuilder {
    this.navbar.navDisplayName = navDisplayName;
    return this;
  }

  public withNavItems(navItems: NavItem[]): NavbarBuilder {
    this.navbar.navItems = navItems;
    return this;
  }

  public withDefaultNavDisplayName(): NavbarBuilder {
    this.navbar.navDisplayName = 'My App';
    return this;
  }

  public withDefaultNavItems(): NavbarBuilder {
    this.navbar.navItems = [
      new NavItem({
        url: '/',
        title: 'Home'
      }),
      new NavItem({
        url: '/about',
        title: 'About'
      }),
      new NavItem({
        url: '/contact-form',
        title: 'Contact'
      }),
    ]

    return this;
  };
          
  public build(): Navbar {
    return new Navbar(this.navbar);
  }
}