import styled from 'styled-components';

export const StyledButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => (props.theme.theme ? '#000' : '#fff')};
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
  cursor: pointer;
`;

export const StyledButtonActive = styled(StyledButton)`
  border-color: #d9b6ff;
  color: #d9b6ff;
`;
