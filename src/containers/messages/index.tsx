import React from 'react'
import styled from 'styled-components'
import Photo from '../../components/photo'
import MenuCollapse, { MenuItem } from '../../components/menu/collapse'

const Container = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: stretch;
`

const Aside = styled.aside`
  background-color: #f9f9f9;

  & > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #CCC;
  }  
`

function App() {
  return (
    <Container>
      <Aside>
        <header>
          <Photo />
          <p>dropdown</p>
        </header>
        <MenuCollapse>
          <MenuItem>
            <p>Caixa de entrada</p>
          </MenuItem>
          <MenuItem>
            <p>Caixa de entrada</p>
          </MenuItem>
        </MenuCollapse>
      </Aside>
      <div>2</div>
    </Container>
  );
}

export default App
