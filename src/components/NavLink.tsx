import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive = to !== "/" ? location.pathname.includes(to) : location.pathname === to ;

  return (
    <Link
      to={to}
      className={`${
        isActive ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600 hover:text-gray-900'
      } py-2`}
    >
      {children}
    </Link>
  );
};

export default NavLink;