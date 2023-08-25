import styled from 'styled-components';

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  gap: 30px;
  box-sizing: border-box;
`;

export const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`;
