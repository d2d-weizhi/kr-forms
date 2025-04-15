import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput, FormCheckBox } from "./shared/form-components";
import { userNameValidator, emailValidator, formValidator } from "./shared/validators";

const genericErrorField: string = 'VALIDATION_SUMMARY';

export default function FormValidation() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return (
		<Form 
			onSubmit={handleSubmit}
			validator={formValidator}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<fieldset className="k-form-fieldset">
						<legend className={"k-form-legend"}>Please fill in the following information:</legend>
						{formRenderProps.visited && formRenderProps.errors && formRenderProps.errors[genericErrorField] && (
							<div className="k-messagebox k-messagebox-error">
								{formRenderProps.errors[genericErrorField]}
								<ul>
									{Object.keys(formRenderProps.errors)
										.filter((field) => field !== genericErrorField)
										.filter((field) => formRenderProps.errors[field])
										.map((field, key) => (
											<li key={key}>{formRenderProps.errors[field]}</li>
										))
									}
								</ul>
							</div>
						)}
						<Field 
							id={"username"}
							name={"username"}
							label={"User Name"}
							component={FormInput}
							validator={userNameValidator}
						/>
						<Field 
							id={"email"}
							name={"email"}
							label={"Email"}
							hint={"Hint: Enter your personal email address."}
							type={"email"}
							component={FormInput}
							validator={emailValidator}
						/>
						<Field 
							id={"notifications"}
							name={"notifications"}
							label={"I want to receive notifications"}
							hint={"You will receive our latest updates and promotions on your email."}
							optional={true}
							component={FormCheckBox}
						/>
						<div className="k-form-buttons">
							<Button themeColor={"primary"} type={"submit"} disabled={!formRenderProps.allowSubmit}>
								Submit
							</Button>
							<Button onClick={formRenderProps.onFormReset}>
								Clear
							</Button>
						</div>
					</fieldset>
				</FormElement>
			)}
		/>
	);
}