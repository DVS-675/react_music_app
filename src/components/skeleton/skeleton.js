/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

const StyledSkeleton = styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: #313131;
`;

export default StyledSkeleton;