import * as Yup from "yup";

export const registrationValidationSchema = Yup.object({
    userName: Yup.string()
      .trim("First name cannot include leading and trailing spaces")
      .strict(true)
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your First Name"),

    lastName: Yup.string()
      .trim("Last name cannot include leading and trailing spaces")
      .strict(true)
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your Last name"),

      address: Yup.string()
      .trim("The contact name cannot include leading and trailing spaces")
      .strict(true)
      .min(5, "Too Short!")
      .max(200, "Too Long!")
      .required("Please enter your Residencial address"),

    emailID: Yup.string()
      .email("Invalid email format")
      .max(255)
      .required("Please enter your Email id"),

      mobilenumber: Yup.number()
      .positive()
      .required("Please enter your Mobile number")
      .min(2),

    occupation: Yup.string()
      .required("Please enter your Occupation"),
      // .test("is-decimal", "invalid decimal", 
      // (value) =>
      //   (value).match(/^[0-9]+(\.[0-9][0-9]?)?$/)
      // ),
  });   