import { InputProps } from "antd";
import { StyledInput } from "./styled";

const FormInput = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default FormInput;
