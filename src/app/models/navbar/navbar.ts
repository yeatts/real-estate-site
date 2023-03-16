// use file to link content to components.
import NavItem from './nav-item';

export type TNavbar = {
  navDisplayName: string,
  navItems: NavItem[] 
}

export default class Navbar {
  public navbar: TNavbar;

  constructor(navbar: TNavbar) {
    this.navbar = navbar; 
  }
  
  public get navbarItems(): NavItem[] {
    return this.navbar.navItems;
  }

  public set navbarItems(navItems: NavItem[]) {
    this.navbar.navItems = navItems;
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
      navItems: []
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