/**
 * Created by vito on 2017/10/19.
 */

import React from 'react';
import Media from 'react-media';
import { SMALL_SCREEN } from '../Theme';

const SmallScreen = ({ children }) => (
  <Media query={SMALL_SCREEN} children={children} />
);

export default SmallScreen;