import { DynamicForm } from '../../CommonComponents/Forms';
import { signInValidationSchema } from './signInValidation';

interface initValueTypes {
  [key: string]: string | string[];
}

export const SignInForm = () => {
  const initialValues = {
    userName: '',
    emailID: '',
    portfolio: '',
    loginId: '',
    password: '',
    confirmPassword: '',
    checked: ['admin'],
    picked: 'admin',
  };

  const formValues = [
    {
      labels: 'User Name',
      tagId: 'userName',
      fieldType: 'text',
    },
    {
      labels: 'Email Id',
      tagId: 'emailID',
      fieldType: 'emailID',
    },
    {
      labels: 'Portfolio',
      tagId: 'portfolio',
      fieldType: 'number',
    },
    {
      labels: 'Account Number',
      tagId: 'loginId',
      fieldType: 'number',
    },
    {
      labels: 'Choose Role',
      tagId: 'checked',
      fieldType: 'checkbox',
      values: ['admin', 'user', 'manager', 'CEO'],
      fielsLabels: ['Admin', 'User', 'Manager', 'CEO'],
    },
    {
      labels: 'radio buttonm',
      tagId: 'picked',
      fieldType: 'radio',
      values: ['admin', 'user', 'manager', 'CEO'],
      fielsLabels: ['Admin', 'User', 'Manager', 'CEO'],
    },

    {
      labels: 'Password',
      tagId: 'password',
      fieldType: 'text',
    },
    {
      labels: 'Confirm Password',
      tagId: 'confirmPassword',
      fieldType: 'password',
    },
  ];
  const onSubmit = (values: initValueTypes) => {
    console.log('Form data', values);
  };

  return (
    <div>
      <h1>
        <b>Sign In Form</b>
      </h1>
      <DynamicForm
        initialValues={initialValues}
        formValues={formValues}
        onDataSubmit={onSubmit}
        validationSchema={signInValidationSchema}
      />
    </div>
  );
};
