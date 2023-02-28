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
          title: 'Home'
        }),
        new NavItem({
          url: '#/accounting-services', 
          title: 'Accounting Services'
        }),
        new NavItem({
          url: '#/resources', 
          title: 'Resources'
        }),
        new NavItem({
          url: '#/blog', 
          title: 'Blog'
        }),
        new NavItem({
          url: '#/about', 
          title: 'About'
        }),
        new NavItem({
          url: '#/contact-form', 
          title: 'Get In Touch'
        }),
        new NavItem({
          url: '#/not-found', 
          title: 'Not Found'
        }),
      ]
    });
  }
}
