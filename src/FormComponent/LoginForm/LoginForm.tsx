import { DynamicForm } from '../../CommonComponents/Forms';
import { loginValidationSchema } from './LoginFormValidations';

interface initValueTypes {
  [key: string]: string | string[];
}

export const LoginFormData = () => {
  const initialValues = {
    loginMail: '',
    Loginpassword: '',
  };

  const formValues = [
    {
      labels: 'Email Id',
      tagId: 'loginMail',
      fieldType: 'emailID',
    },
    {
      labels: 'Password',
      tagId: 'Loginpassword',
      fieldType: 'text',
    },
  ];

  const onSubmit = (values: initValueTypes) => {
    console.log('Form data', values);
  };

  return (
    <div>
      <h1>
        <b>Login Form</b>
      </h1>
      <DynamicForm
        initialValues={initialValues}
        formValues={formValues}
        onDataSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      />
    </div>
  );
};
