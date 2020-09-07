import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react'
import Headroom from 'react-headroom'
import Footer from '../Footer'
import Header from '../Header'
// import styled from 'styled-components'
// import styles from './Layout.module.css'

// const StyledContainer = styled(Container)`
//   margin-left: '4.25em';
// `

const Layout = ({location, children}) => (
  <>
    <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{zIndex: '20', height: '6.5em'}}
    >
      <Header location={location} />
    </Headroom>
    <Container>{children}</Container>
    {/* <StyledContainer>{children}</StyledContainer> */}
    <Footer />
  </>
)
export default Layout
