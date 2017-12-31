import styled from 'styled-components'
import * as colors from '../colors'

const Viewport = styled.div`
  height : 100vh;
  width  : 100vw;
  overflow: auto;
  background-color : ${colors.background}
`
export default Viewport;