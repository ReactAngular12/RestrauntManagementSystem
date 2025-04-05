import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Wrong Email ID").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character",
    )
    .min(6, "Password must be at least 6 characters long")
    .max(16, "Password must be at most 16 characters long")
    .required("Password is required"),
});
