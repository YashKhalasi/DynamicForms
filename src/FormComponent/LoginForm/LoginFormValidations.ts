import * as Yup from "yup";


export const loginValidationSchema = Yup.object({

    loginMail: Yup.string()
      .email("Invalid email format")
      .max(255)
      .required("Please enter your Email id"),

      Loginpassword: Yup.string()
      .required("Please enter your Password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase,one lower, one number and one special case character"
      ),

      selectOption: Yup.string().required('PLease select any option'),
      description: Yup.string().required('Description is Required'),
    })