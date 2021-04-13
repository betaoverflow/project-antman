import React, {useEffect, useState} from "react";
import {
  Nav,
  NavbarContainer,
  NavHead,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar=()=> {
  const [scrollNav,setScrollNav]=useState(false)

  const changeNav = ()=>{
    if(window.scrollY>=80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavHead to="/">Beta Overflow</NavHead>
        <NavBtn>
          <NavBtnLink to='/community'>Community</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
