export interface SignUpData {
  name: string;
  email: string;
  mobileNumber: string;
}

export interface AuthenticationContextType {
  signUp: (credentials: SignUpData) => void;
}
