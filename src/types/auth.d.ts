export type AuthFormState = {
  status?: string;
  errors?: {
    email?: string[];
    name?: string[];
    password?: string[];
    role?: string[];
    avatar_url?: string[];
    _form?: string[];
  };
};
