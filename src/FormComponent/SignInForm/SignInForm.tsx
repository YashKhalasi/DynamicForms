import { DynamicForm } from "../../CommonComponents/Forms";
import { signInValidationSchema } from "./signInValidation";

type initValueTypes = {
  [key: string]: string | string[];
};

export const FormData = () => {
  const initialValues = {
    userName: "",
    emailID: "",
    portfolio: "",
    loginId: "",
    password: "",
    confirmPassword: "",
    checked: ["111"],
    picked: "one",
  };
  //   const labels = ["User Name", "abc"];
  //   const tagId = ["userName", "aaa"];
  //   const fieldType = ["text", "sss"];

  const formValues = [
    {
      labels: "User Name",
      tagId: "userName",
      fieldType: "text",
    },
    {
      labels: "Email Id",
      tagId: "emailID",
      fieldType: "emailID",
    },
    {
      labels: "Portfolio",
      tagId: "portfolio",
      fieldType: "number",
    },
    {
      labels: "Account Number",
      tagId: "loginId",
      fieldType: "number",
    },
    {
      labels: "Choose Role",
      tagId: "checked",
      fieldType: "checkbox",
      values: ["111", "222", "333", "444"],
      fielsLabels: ["admin", "user", "manager", "CEO"],
    },
    {
      labels: "radio buttonm",
      tagId: "picked",
      fieldType: "radio",
      values: ["one", "two", "three", "four"],
      fielsLabels: ["admin", "user", "manager", "CEO"],
    },

    {
      labels: "Password",
      tagId: "password",
      fieldType: "text",
    },
    {
      labels: "Confirm Password",
      tagId: "confirmPassword",
      fieldType: "password",
    },
  ];
  const onSubmit = (values: initValueTypes) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <DynamicForm
        initialValues={initialValues}
        // labels={labels}
        // tagId={tagId}
        // fieldType={fieldType}
        formValues={formValues}
        onDataSubmit={onSubmit}
        validationSchema={signInValidationSchema}
      />
    </div>
  );
};
