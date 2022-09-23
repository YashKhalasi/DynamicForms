/**
 * Input component for the input field
 *
 */

import { Field } from "formik";

interface propsType {
  type: string;
  name: string;
}

function Input(props: propsType) {
  const { name, type } = props;
  return (
    <>
      <Field type={type} id={name} name={name} />
    </>
  );
}

export default Input;
