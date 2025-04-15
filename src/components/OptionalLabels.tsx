import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormMaskedTextBox, FormFloatingNumericTextBox } from "./shared/form-components";

export default function OptionalLabels() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return (
		<Form 
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"street"}
						name={"street"}
						label={"Street Number"}
						hint={"Hint: Enter your street number."}
						option={true}
						format={"n2"}
						component={FormFloatingNumericTextBox}
					/>
					<Field 
						id={"phoneNumber"}
						name={"phoneNumber"}
						label={"Phone Number"}
						hint={"Hint: Your active phone number."}
						mask={"(00) 0000 0000"}
						optional={true}
						component={FormMaskedTextBox}
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