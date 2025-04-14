import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormCheckBox, FormRadioGroup } from "./shared/form-components";
import { genders } from "./shared/data";

interface confirmationDataInterface {
	label: string;
	value: string;
}

const confirmationData: Array<confirmationDataInterface> = [
	{ label: "Phone Call", value: "phone" },
	{ label: "Via Email", value: "email" }
];

export default function CheckboxesRadioButtons() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return (
		<Form 
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"confirmationType"}
						name={"confirmationType"}
						label={"Type of Confirmation"}
						hint={"Hint: Choose a way to receive a confirmation."}
						component={FormRadioGroup}
						data={confirmationData}
					/>
					<Field 
						id={"gender"}
						name={"gender"}
						label={"Gender"}
						layout={"horizontal"}
						component={FormRadioGroup}
						data={genders}
					/>
					<Field 
						id={"terms"}
						name={"terms"}
						label={"I agree with the terms and conditions."}
						hint={"Hint: By checking this, you agree to our terms and conditions."}
						component={FormCheckBox}
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