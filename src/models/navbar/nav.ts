// use file to link content to components.
import NavItem from './navItem';

// used TS "interface" to create object type routes in the navbar.
export interface INav {
  navItems?: NavItem[] 
}

export default class Nav {
  navItems!: NavItem[];

  constructor(nav: INav) {
    if (!nav) {
      throw new Error("Cannot construct Nav from falsey INav");
    }

    this.navItems = nav.navItems || [];
  }

  public static empty(): Nav {
    return new Nav({
      navItems: []
    });
  }

  public static withDefaultNavItems(): Nav {
    return new Nav({
      navItems: [
        new NavItem({
          url: '#/',
          name: 'Home'
        }),
        new NavItem({
          url: '#/accounting-services', 
          name: 'Accounting Services'
        }),
        new NavItem({
          url: '#/resources', 
          name: 'Resources'
        }),
        new NavItem({
          url: '#/blog', 
          name: 'Blog'
        }),
        new NavItem({
          url: '#/about', 
          name: 'About'
        }),
        new NavItem({
          url: '#/contact-form', 
          name: 'Get In Touch'
        }),
        new NavItem({
          url: '#/not-found', 
          name: 'Not Found'
        }),
      ]
    });
  }
}
