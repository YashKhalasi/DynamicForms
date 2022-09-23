import * as Yup from "yup";

import {signInValidationSchema} from "../FormComponent/SignInForm/signInValidation"
import {loginValidationSchema} from "../FormComponent/LoginForm/LoginFormValidations"
// console.log("ValidationSchema: " , validationSchema);

export const validationSchemaas = Yup.object({})
.concat(signInValidationSchema)
.concat(loginValidationSchema)