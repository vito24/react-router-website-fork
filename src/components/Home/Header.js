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

const Button = ({ to, small, ...props }) => (
  <Block
    component={Link}
    props={{ to }}
    flex="1"
    activeBoxShadow="2px 2px 4px rgba(0,0,0,.25)"
    activeTop="5px"
    background="#FFF"
    borderRadius="100px"
    boxShadow={small ? (
      '0 5px 15px rgba(0, 0, 0, .25)'
    ) : (
      '0 10px 30px rgba(0, 0, 0, .25)'
    )}
    cursor="pointer"
    fontSize="10px"
    fontWeight="bold"
    hoverBoxShadow={small ? (
      '0 5px 10px rgba(0, 0, 0, .25)'
    ) : (
      '0 10px 25px rgba(0, 0, 0, .25)'
    )}
    hoverTop="1px"
    marginRight={small ? '10px' : '20px'}
    padding={small ? '10px' : '15px 25px'}
    position="relative"
    textAlign="center"
    textTransform="uppercase"
    top="0"
    userSelect="none"
    whiteSpace="nowrap"
    {...props}
  />
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
    <Block flex="1">
      <Block lineHeight="1">
        <Block
          textTransform="uppercase"
          fontSize={isSmallScreen ? '80%' : '120%'}
          fontWeight="bold"
        >
          Learn once, Route anywhere
        </Block>
        <Block
          component="h2"
          textTransform="uppercase"
          fontSize={isSmallScreen ? '200%' : '350%'}
          fontWeight="bold"
        >
          React Router
        </Block>
        <Block
          margin="20px 0"
          fontSize={isSmallScreen ? '80%' : null}
        >
          Components are the heart of React's powerful, declarative
          programming model. React Router is a collection of <b>navigational
          components</b> that compose declaratively with your application. Whether
          you want to have <b>bookmarkable URLs</b> for your web app or a composable
          way to navigate in <b>React Native</b>, React Router works wherever React
          is rendering--so take your pick!
        </Block>
        <Row>
          <Button to="/web" small={isSmallScreen}>WEB</Button>
          <Button to="/native" small={isSmallScreen}>NATIVE</Button>
          <Button to="/core" small={isSmallScreen}>ANYWHERE</Button>
        </Row>
      </Block>
    </Block>
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