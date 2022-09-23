import { DynamicForm } from "../../CommonComponents/Forms";
import { registrationValidationSchema } from "./registrationValidation";

type initValueTypes = {
  [key: string]: string | string[];
};

export const RegistrationForms = () => {
  const initialValues = {
    userName: "",
    lastName: "",
    address: "",
    emailID: "",
    mobilenumber: "",
    occupation: "",
    married: "married",
  };

  const formValues = [
    {
      labels: "First Name",
      tagId: "userName",
      fieldType: "text",
    },
    {
      labels: "Last Name",
      tagId: "lastName",
      fieldType: "text",
    },
    {
      labels: "Address",
      tagId: "address",
      fieldType: "textarea",
    },
    {
      labels: "Email Id",
      tagId: "emailID",
      fieldType: "emailID",
    },
    {
      labels: "Mobile Number",
      tagId: "mobilenumber",
      fieldType: "number",
    },
    {
      labels: "Occupation",
      tagId: "occupation",
      fieldType: "text",
    },
    {
      labels: "Maritial Status",
      tagId: "married",
      fieldType: "radio",
      values: ["married", "single"],
      fielsLabels: ["Married", "Single"],
    },
  ];
  const onSubmit = (values: initValueTypes) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <h1>
        <b>Registration Form</b>
      </h1>
      <DynamicForm
        initialValues={initialValues}
        formValues={formValues}
        onDataSubmit={onSubmit}
        validationSchema={registrationValidationSchema}
      />
    </div>
  );
};
