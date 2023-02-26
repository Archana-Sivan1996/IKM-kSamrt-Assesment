import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <>
     <Nav defaultActiveKey="/" className="flex-column">
     <Heading>
        {'Setup'}
    </Heading>
      <NavLinkActive href="/">System Records</NavLinkActive>
      <NavLink eventKey="link-1">System Default Payments</NavLink>
      <NavLink eventKey="link-2">System Date Verifications</NavLink>
    </Nav>
    </>
  )
}


const NavLink = styled.li`
text-decoration:none;
font-size:17px;
font-weight:600;
color:rgba(0,0,0,0.6);
padding-top:15px;
`;

const NavLinkActive = styled.li`
text-decoration:none;
font-size:17px;
font-weight:600;
color:green;
padding-top:15px;
`;
const Heading = styled.h3`
color:#000;
`;
