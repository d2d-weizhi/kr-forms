import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormFloatingNumericTextBox } from "./shared/form-components";
import { requiredValidator } from "./shared/validators";

export default function FloatingLabels() {
  const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

  return (
    <Form 
      onSubmit={handleSubmit}
      render={(formRenderProps: FormRenderProps) => (
        <FormElement style={{ width: 550 }}>
          <Field 
            id={"age"}
            name={"age"}
            label={"Age"}
            hint={"Hint: Enter your age"}
            format={"n2"}
            component={FormFloatingNumericTextBox}
            validator={requiredValidator}
          />
          <Field 
            id={"street"}
            name={"street"}
            label={"Street Number"}
            hint={"Hint: Enter your street number."}
            format={"n2"}
            component={FormFloatingNumericTextBox}
            validator={requiredValidator}
          />
          <div className="k-form-buttons">
            <Button themeColor={"primary"} type={"submit"} disabled={!formRenderProps.allowSubmit}>
              Submit
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </div>
        </FormElement>
      )}
    />
  );
}