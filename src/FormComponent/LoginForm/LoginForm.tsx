import { DynamicForm } from "../../CommonComponents/Forms";
import { loginValidationSchema } from "./LoginFormValidations";

type initValueTypes = {
  [key: string]: string | string[];
};

export const LoginFormData = () => {
  const initialValues = {
    loginMail: "",
    Loginpassword: "",
  };
  //   const labels = ["User Name", "abc"];
  //   const tagId = ["userName", "aaa"];
  //   const fieldType = ["text", "sss"];

  const dropdownOptions = [
    // { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const formValues = [
    {
      labels: "Email Id",
      tagId: "loginMail",
      fieldType: "emailID",
    },
    {
      labels: "Description",
      tagId: "description",
      fieldType: "textarea",
    },
    {
      labels: "Select a topic",
      tagId: "selectOption",
      fieldType: "select",
      selectValues: dropdownOptions,
    },
    {
      labels: "Password",
      tagId: "Loginpassword",
      fieldType: "text",
    },
  ];

  const onSubmit = (values: initValueTypes) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <DynamicForm
        initialValues={initialValues}
        formValues={formValues}
        onDataSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      />
    </div>
  );
};
