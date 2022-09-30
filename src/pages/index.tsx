import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import ProfileImage from "components/Main/ProfileImage"
import GlobalStyle from "components/Common/Globalstyle"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <ProfileImage />
    </Container>
  )
}

export default IndexPage
