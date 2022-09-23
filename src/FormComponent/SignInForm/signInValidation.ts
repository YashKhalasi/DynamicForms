import * as Yup from "yup";

export const signInValidationSchema = Yup.object({
    userName: Yup.string()
      .trim("The contact name cannot include leading and trailing spaces")
      .strict(true)
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your Name"),

    emailID: Yup.string()
      .email("Invalid email format")
      .max(255)
      .required("Please enter your Email id"),
    loginId: Yup.number()
      .positive()
      .required("Please enter your Account number")
      .min(2),
    portfolio: Yup.number()
      .positive()
      .required("Please enter your Portfolio"),
      // .test("is-decimal", "invalid decimal", 
      // (value) =>
      //   (value).match(/^[0-9]+(\.[0-9][0-9]?)?$/)
      // ),
    password: Yup.string()
      .required("Please enter your Password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase,one lower, one number and one special case character"
      ),
    confirmPassword: Yup.string().when("password", {
      is: (val:string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });   