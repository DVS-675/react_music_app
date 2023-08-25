import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: ${(props) => (props.theme.theme ? '#F6F5F3' : '#313131')};
  margin-top: 10px;
  position: absolute;
  border-radius: 12px;
  max-width: 248px;
  max-height: 305px;
  padding: 34px;
  display: block;
  color: ${(props) => (props.theme.theme ? '#000' : '#fff')};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  max-width: 180px;
  max-height: 237px;
  padding-right: 24px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.theme.theme ? '#fff' : '#000')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme.theme ? '#313131' : '#F6F5F3')};
    border-radius: 10px;
    width: 4px;
    height: 65px;
  }
`;

export const StyledElement = styled.li`
  cursor: pointer;
  color: ${(props) => (props.styled ? '#AD61FF' : '')};
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
  cursor: pointer;
`;

export const StyledFormButton = styled.div`
  display: inline-block;
  color: ${(props) => (props.checked ? '#ad61ff' : '')};

  & input[type='radio'] {
    display: none;
  }

  & label {
    display: inline-block;
    cursor: pointer;
    user-select: none;
  }
`;
