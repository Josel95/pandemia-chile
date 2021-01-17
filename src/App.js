import React from 'react';

import styled from 'styled-components'

import { Text } from 'react-native'

const ViewStyled = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export default function App() {
  return (
    <ViewStyled>
      <Text>Pandemia chile</Text>
    </ViewStyled>
  );
}
