// use file to link content to components.
import NavItem from './navItem';

// used TS "interface" to create object type routes in the navbar.
export interface INavbar {
  navItems?: NavItem[] 
}

export default class Navbar {
  public navItems!: NavItem[];

  constructor(navbar: INavbar) {
    if (!navbar) {
      throw new Error("Cannot construct Navbar from falsey INavbar");
    }

    this.navItems = navbar.navItems || [];
  }

  public static empty(): Navbar {
    return new Navbar({
      navItems: []
    });
  }

  public static withDefaultNavItems(): Navbar {
    return new Navbar({
      navItems: [
        new NavItem({
          url: '/',
          title: 'Home'
        }),
        new NavItem({
          url: '/accounting-services', 
          title: 'Accounting Services'
        }),
        new NavItem({
          url: '/resources', 
          title: 'Resources'
        }),
        new NavItem({
          url: '/blog', 
          title: 'Blog'
        }),
        new NavItem({
          url: '/about', 
          title: 'About'
        }),
        new NavItem({
          url: '/contact-form', 
          title: 'Get In Touch'
        }),
        new NavItem({
          url: '/not-found', 
          title: 'Not Found'
        }),
      ]
    });
  }
}
