import Base from "./Base";
import Password from "./Password";
import Number from "./Number";
import Amount from "./Amount";
import TextArea from "./TextArea";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";
import Select from "./Select";
import OTP from "./OTP";

type TextInputProps = typeof Base & {
  Password: typeof Password;
  Number: typeof Number;
  Amount: typeof Amount;
  TextArea: typeof TextArea;
  Email: typeof Email;
  PhoneNumber: typeof PhoneNumber;
  Select: typeof Select;
  OTP: typeof OTP;
};

const TextInput = Base as TextInputProps;

TextInput.Password = Password;
TextInput.Number = Number;
TextInput.Amount = Amount;
TextInput.TextArea = TextArea;
TextInput.Email = Email;
TextInput.PhoneNumber = PhoneNumber;
TextInput.Select = Select;
TextInput.OTP = OTP;

export default TextInput;
