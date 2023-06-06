import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Navbar from '@/app/components/navbar/Navbarz';
import { TNavbar } from '@/app/models/navbar/navbar';
import NavItem from '@/app/models/navbar/navitem';

describe('Navbar', () => {
  const mockNavbarProps: TNavbar = {
    navDisplayName: 'My Navbar',
    leftNavItems: [
      NavItem.builder().withTitle('Item 1').withUrl('/item1').build(),
    ],
    rightNavItems: [
      NavItem.builder().withTitle('Item 2').withUrl('/item2').build(),
    ],
  };

  it('should render the navbar title', () => {
    const { getByText } = render(<Navbar {...mockNavbarProps} />);
    const navTitleElement = getByText('My Navbar');
    expect(navTitleElement).toBeInTheDocument();
  });

  it('should render the navbar items', () => {
    const { getByText } = render(<Navbar {...mockNavbarProps} />);
    const navItem1Element = getByText('Item 1');
    const navItem2Element = getByText('Item 2');
    expect(navItem1Element).toBeInTheDocument();
    expect(navItem2Element).toBeInTheDocument();
  });
});
