import React from 'react';

import styled from 'styled-components'

import { Comuna } from './components/Comuna/Comuna'

import { Paso } from './components/Paso/Paso'

import { ComunaList } from './components/ComunaList/ComunaList'

const ViewStyled = styled.View`
    display: flex;
    align-items: center;
    padding-top: 50px;
    height: 100%;
`

export default function App() {
  return (
    <ViewStyled>
      <Comuna comuna={'San Miguel'} />
      <Paso paso={2} />

      <ComunaList/>
    </ViewStyled>
  );
}
