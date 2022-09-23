import { Field, ErrorMessage } from "formik";

interface propsType {
  formValues: {
    labels: string;
    tagId: string;
    fieldType: string;
  };
  isReset: boolean;
}

function Textarea(props: propsType) {
  const { labels, tagId, fieldType } = props.formValues;
  return (
    <>
      {!props.isReset ? (
        <Field as={fieldType} id={tagId} name={tagId} value={""} />
      ) : (
        <Field as={fieldType} id={tagId} name={tagId} />
      )}
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </>
  );
}

export default Textarea;
