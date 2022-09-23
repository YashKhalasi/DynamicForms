import { Field } from "formik";

type selectProps = {
  key: string;
  value: string;
};

interface propsType {
  formValues: {
    labels: string;
    tagId: string;
    fieldType: string;
    selectValues?: selectProps[];
  };
  selectValues?: selectProps[];
  isReset: boolean;
}

function Select(props: propsType) {
  const { tagId, selectValues, fieldType } = props.formValues;
  console.log(props.selectValues, "inselect...", props.isReset);
  return (
    <>
      <Field as={fieldType} id={tagId} name={tagId}>
        {!props.isReset ? (
          <option selected value={""}>
            Open this select menu
          </option>
        ) : (
          <option value={""}>Open this select menu</option>
        )}
        {selectValues?.map((option: selectProps) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      {/* <ErrorMessage component={TextError} name={props.formValues.tagId} /> */}
    </>
  );
}

export default Select;
