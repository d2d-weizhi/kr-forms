import React from 'react';
import { 
	Form, 
	Field, 
	FormElement, 
	FieldRenderProps,
	FormRenderProps,
	FieldWrapper
} from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');
const EmailInput = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, visited, ...others } = fieldRenderProps;
	return (
		<div className="k-form-field-wrap">
			<Input {...others} labelClassName={'k-form-label'} />
			{visited && validationMessage && <Error>{validationMessage}</Error>}
		</div>
	);
};

export default function BasicForm() {
	function handleSubmit(dataItem: {[name: string]: any}) {
		console.log(JSON.stringify(dataItem, null, 2));
	}

	return (
		<Form
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ maxWidth: 650 }}>
					<fieldset className={'k-form-fieldset'}>
						<legend className={'k-form-legend'}>Please fill in the fields:</legend>
						<FieldWrapper>
							<div className="k-form-field-wrap">
								<Field 
									name={'firstName'}
									component={Input}
									labelClassName={"k-form-label"}
									label={'First Name'}
								/>
							</div>
						</FieldWrapper>
						<FieldWrapper>
							<div className="k-form-field-wrap">
								<Field 
									name={'lastName'}
									component={Input}
									labelClassName={"k-form-label"}
									label={'Last name'}
								/>
							</div>
						</FieldWrapper>
						<FieldWrapper>
							<Field 
								name={'email'}
								type={'email'}
								component={EmailInput}
								label={'Email'}
								validator={emailValidator}
							/>
						</FieldWrapper>
					</fieldset>
					<div className="k-form-buttons">
						<Button themeColor={"primary"} disabled={!formRenderProps.allowSubmit}>Submit</Button>
					</div>
				</FormElement>
			)}
		/>
	);
}