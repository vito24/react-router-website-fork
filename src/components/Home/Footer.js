/**
 * Created by vito on 2017/10/21.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Block, Inline } from 'jsxstyle';
import { DARK_GRAY, BRIGHT_GRAY, LIGHT_GRAY, RED } from '../../Theme';
import SmallScreen from '../SmallScreen';

const Button = ({ children, ...props}) => (
  <Block
    component="button"
    color="#fff"
    padding="15px 10px"
    background={RED}
    borderRadius={0}
    cursor="pointer"
    border="none"
    textShadow="none"
    minWidth="80px"
    children={children}
    {...props}
  />
);

class NewsletterSignup extends Component {
  state = {
    submitted: false,
    name: '',
    email: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    window.location.href='https://reacttraining.com/online/react-router'
  }

  render() {
    const { submitted } = this.state;
    return (
      <SmallScreen>
        {
          (isSmallScreen) => (
            <Block
              background="#FFF"
              maxWidth="700px"
              margin="auto"
              padding={isSmallScreen ? '40px' : '80px'}
            >
              <Block
                margin="auto"
                paddingBottom={isSmallScreen ? '20px' : '40px'}
                textAlign="center"
                fontSize={isSmallScreen ? '100%' : '150%'}
                fontWeight="bold"
              >
                As a companion to the documentation, we'll be launching a free course on React Router v4 within the next few weeks.
              </Block>
              <form onSubmit={this.handleSubmit.bind(this)}>
                {
                  submitted ? (
                    <Block color='white' textAlign='center'>
                      Thank you for signing up :)
                    </Block>
                  ) : (
                    <Block
                      display="flex"
                      flexDirection={isSmallScreen ? 'column' : 'row'}
                      justifyContent="space-around"
                    >
                      <Button type="submit">More Information</Button>
                    </Block>
                  )
                }
              </form>
            </Block>
          )
        }
      </SmallScreen>
    );
  }
}

const FooterLink = ({href, ...props}) => (
  <Inline
    component="a"
    textDecoration="underline"
    props={{ href }}
    {...props}
  />
);

const ReactTraining = () => (
  <FooterLink href="https://reacttraining.com">React Training</FooterLink>
);

const Contributors = () => (
  <FooterLink href="https://github.com/ReactTraining/react-router/graphs/contributors">
    contributors
  </FooterLink>
);

const CC = () => (
  <FooterLink href="https://creativecommons.org/licenses/by/4.0/">CC 4.0</FooterLink>
);

const year = new Date().getFullYear();

const Footer = () => (
  <Block>
    <NewsletterSignup />
    <Block
      background={DARK_GRAY}
      color={BRIGHT_GRAY}
      padding="40px"
      textAlign="center"
      fontSize="80%"
    >
      <Block component="p">
        React Router is built and maintained by <ReactTraining /> and
        hundreds of <Contributors />.
      </Block>
      <Block marginTop="20px" color={LIGHT_GRAY}>
        &copy; {year} React Training
      </Block>
      <Block color={LIGHT_GRAY}>
        Code examples and documentation <CC />
      </Block>
    </Block>
  </Block>
);

export default Footer;