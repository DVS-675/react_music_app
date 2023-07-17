import styled from "styled-components"

export const StyledSkeleton = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: #313131;
`


