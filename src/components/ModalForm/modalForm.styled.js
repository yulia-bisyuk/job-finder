import styled from 'styled-components';

const Form = styled.form`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 328px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

const InputPositioning = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -7px;
  left: 16px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: ${props => props.theme.lightGreyBg};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  color: ${props => props.theme.helperTextColor};
`;

const TextTypeInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 16px;
  border: 1px solid ${props => props.theme.borderInputColor};
  border-radius: 8px;
  background-color: ${props => props.theme.lightGreyBg};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.helperTextColor};
  }
`;
const HelperText = styled.p`
  margin-left: 16px;
  margin-bottom: 0;
  font-size: 12px;
  color: ${props => props.theme.bsRed};
`;

const PhoneMask = styled.p`
  margin-left: 16px;
  margin-bottom: 0;
  font-size: 12px;
  color: ${props => props.theme.helperTextColor}; ;
`;

const RadioGroup = styled.div`
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const RadioGroupText = styled.p`
  margin-top: 25px;
  margin-bottom: 11px;
`;

const RadioGroupLabel = styled.label`
  align-items: center;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

const RadioGroupInput = styled.input`
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  margin-right: 12px;
  width: 20px;
  height: 20px;
  padding: 4px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid ${props => props.theme.borderInputColor};
  background-color: ${props => props.theme.lightGreyBg};
  border-radius: 50%;

  &:checked {
    border: 1px solid ${props => props.theme.darkGreyColor};
    background-color: ${props => props.theme.darkGreyColor};
  }
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const FileInputLabel = styled.label`
  display: flex;
`;
const FileInputUpload = styled.span`
  display: block;
  padding: 14px 15px;
  border: 1px solid ${props => props.theme.darkGreyColor};
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
`;

const FileInputPlaceholder = styled.span`
  display: block;
  width: 245px;
  padding: 14px 16px;

  border-width: 1px 1px 1px 0px;
  border-color: ${props => props.theme.borderInputColor};
  border-style: solid;
  border-radius: 0px 8px 8px 0px;
  color: ${props => props.theme.helperTextColor};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    width: 297px;
  }
`;

// .formNotificationWrapper {
//   @include flex($justifyContent: center);
//   flex-direction: column;
//   margin-right: auto;
//   margin-left: auto;
//   width: 328px;
//   @media screen and (min-width: 768px) {
//     width: 380px;
//   }
// }

const FormSuccessPic = styled.img`
  margin: 60px auto;

  width: 100%;
`;

export {
  Form,
  InputPositioning,
  Label,
  TextTypeInput,
  HelperText,
  RadioGroupText,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupInput,
  FileInput,
  FileInputLabel,
  FileInputUpload,
  FileInputPlaceholder,
  PhoneMask,
  FormSuccessPic,
};
