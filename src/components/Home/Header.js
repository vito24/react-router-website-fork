/**
 * Created by vito on 2017/10/19.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Block, Row, Inline } from 'jsxstyle';
import SmallScreen from '../SmallScreen';
import Logo from '../Logo';
import { LIGHT_GRAY } from '../../Theme';

const NavLink = ({ href, ...props }) => (
  <Block
    component="a"
    props={{ href }}
    margin="0 10px"
    {...props}
  />
);

const NavBar = () => (
  <Row
    textTransform="uppercase"
    fontWeight="bold"
    width="100%"
  >
    <Block flex="1" fontSize="14px">
      <Inline component="a" props={{ href: 'https://reacttraining.com' }}>
        React Training
      </Inline>
      <Inline> / </Inline>
      <Inline component="a" props={{ href: 'https://reacttraining.com' }} color={LIGHT_GRAY}>
        React Router
      </Inline>
    </Block>
    <Row fontSize="12px">
      <NavLink href="https://github.com/ReactTraining/react-router">GITHUB</NavLink>
      <NavLink href="https://www.npmjs.com/package/react-router">NPM</NavLink>
      <NavLink href="https://reacttraining.com" margin="0">Get Training</NavLink>
    </Row>
  </Row>
);

const Banner = ({ isSmallScreen }) => (
  <Row width="100%">
    {
      !isSmallScreen && (
        <Block flex="1">
          <Logo />
        </Block>
      )
    }
  </Row>
);

const Header = () => (
  <SmallScreen>
    {
      (isSmallScreen) => (
        <Block background="linear-gradient(125deg, #fff, #f3f3f3 41%, #ededed 0, #fff)">
          <Block padding="20px" maxWidth="1000px" margin="auto">
            {
              !isSmallScreen && (
                <NavBar />
              )
            }
            <Block height={isSmallScreen ? '20px' : '40px'}/>
            <Banner isSmallScreen={isSmallScreen} />
            <Block height="20px"/>
          </Block>
        </Block>
      )
    }
  </SmallScreen>
);

export default Header;