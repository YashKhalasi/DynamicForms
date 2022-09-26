import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Button } from 'react-bootstrap';
import TextError from './TextError';
import Select from './Select';
import Textarea from './Textarea';
import Input from './Input';

interface initValueTypes {
  [key: string]: string | string[];
}

interface selectProps {
  key: string;
  value: string;
}

interface propsType {
  formValues: Array<{
    labels: string;
    tagId: string;
    fieldType: string;
    fielsLabels?: string[];
    values?: string[];
    selectValues?: selectProps[];
    description?: string;
  }>;
  onDataSubmit: (data: initValueTypes) => void;
  initialValues: initValueTypes;
  validationSchema: any;
}

export const DynamicForm = (props: propsType) => {
  console.log(
    'props values...',
    props.formValues.map((i) => i),
  );

  return (
    <Container className="d-flex w-100 flex-wrap justify-content-center pt-5">
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        onSubmit={(values: initValueTypes) => {
          console.log('Formik props', values);
          props.onDataSubmit(values);
        }}
        enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        // validateOnMount
      >
        {(formik) => {
          // console.log("Formik props", formik);
          return (
            <Form>
              {props.formValues.map((i, k) => {
                return (
                  <div className="mb-3 form-control " key={k}>
                    <label className="p-2 form-label" htmlFor={i.tagId}>
                      <b>{i.labels}</b>
                    </label>
                    {i.fieldType === 'checkbox' || i.fieldType === 'radio'
                      ? i.values?.map((f, g) => (
                          <label className="p-2 form-label" key={g}>
                            <Field
                              type={i.fieldType}
                              name={i.tagId}
                              value={f}
                            />
                            &nbsp;
                            {i.fielsLabels != null ? i.fielsLabels[g] : null}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                          </label>
                        ))
                      : null}

                    {i.fieldType === 'select' ? (
                      <Select
                        formValues={i}
                        selectValues={i.selectValues}
                        isReset={formik.dirty}
                      />
                    ) : null}

                    {i.fieldType === 'textarea' ? (
                      <Textarea formValues={i} isReset={formik.dirty} />
                    ) : null}

                    {i.fieldType === 'text' ||
                    i.fieldType === 'emailID' ||
                    i.fieldType === 'password' ||
                    i.fieldType === 'number' ? (
                      <Input type={i.fieldType} name={i.tagId} />
                    ) : null}

                    <ErrorMessage name={i.tagId} component={TextError} />
                  </div>
                );
              })}
              <Button
                variant="primary"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button type="reset" variant="warning">
                Reset
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
