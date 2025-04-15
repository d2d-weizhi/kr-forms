import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput } from "./shared/form-components";
import { userNameValidator, emailValidator } from "./shared/validators";

export default function FieldValidations() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return (
		<Form 
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"username"}
						name={"username"}
						label={"Username"}
						component={FormInput}
						validator={userNameValidator}
					/>
					<Field 
						id={"email"}
						name={"email"}
						label={"Email"}
						type={"email"}
						component={FormInput}
						validator={emailValidator}
					/>
					<div className="k-forms-button">
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