import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginFormData } from '../FormComponent/LoginForm/LoginForm';
import { RegistrationForms } from '../FormComponent/RegistrationForms/RegistrationForms';
import { SignInForm } from '../FormComponent/SignInForm/SignInForm';

const Loading = () => <p>Loading ...</p>;
const Router = () => {
  console.log('Loading...');
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/registration" element={<RegistrationForms />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/login" element={<LoginFormData />} />
      </Routes>
    </React.Suspense>
  );
};
export default Router;
