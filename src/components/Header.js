import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/category';

function Header() {
  const CATEGORIES = ['all', 'random', 'animals', 'food', 'fashion', 'travel']

  return (
    <HeaderWrap>
      <Nav>
        <NavList>
          {CATEGORIES.map(category => (
            <CategoryNav category={category} key={category}/>
          ))}
        </NavList>
      </Nav>
    </HeaderWrap>
  );
}

const CategoryNav = ({category}) => {
  const isSelected = useSelector(state => state.category.category === category);
  const dispatch = useDispatch()

  return (
    <NavItem
      active={isSelected}
      onClick={() => {
        dispatch(setCategory(category))
      }}
    >
      <span>{category}</span>
    </NavItem>
  )
}

const HeaderWrap = styled.header`
  border-bottom: 1px solid #666;
`;

const Nav = styled.nav`
  height: 64px;
`;
const NavList = styled.ul`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.li`
  span {
    padding: 0 2rem;
    font-size: 1.5em;
    font-weight: 700;
    color: ${({ active }) => (active ? '#fff' : '#999')};
    cursor: pointer;
    text-transform: capitalize;
  }

  span:hover {
    color: #fff;
  }
`;

export default React.memo(Header);
