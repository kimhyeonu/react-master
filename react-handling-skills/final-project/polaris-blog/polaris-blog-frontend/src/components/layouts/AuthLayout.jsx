import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import palette from '../../lib/styles/palette';

const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;

  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <Block>
      <Box>
        <div className="logo-area">
          <Link to="/">POLARIS BLOG</Link>
        </div>

        {children}
      </Box>
    </Block>
  );
};

export default AuthLayout;
