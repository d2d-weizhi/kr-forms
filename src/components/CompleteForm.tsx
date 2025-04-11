import React from 'react';
import { Form, Field, FormElement, FormRenderProps } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
	FormDatePicker,
	FormNumericTextBox,
	FormInput,
	FormCheckBox,
	FormMaskedTextBox,
	FormTextArea
} from "./shared/form-components";

import {
	termsValidator,
	emailValidator,
	nameValidator,
	phoneValidator,
	guestsValidator,
	nightsValidator,
	arrivalDateValidator
} from "./shared/validators";

export default function CompleteForm() {
	function handleSubmit(dataItem: {[name: string]: any}) {
		alert(JSON.stringify(dataItem, null, 2));
	}
	
	return (
		<Form
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 650 }}>
					<fieldset className={'k-form-fieldset'}>
						 <legend className={'k-form-legend'}>BOOK YOUR DREAM VACATION TODAY</legend>
						<Field
							id={'fullName'}
							name={'fullName'}
							label={'Full Name'}
							component={FormInput}
							validator={nameValidator}
						/>
						<Field
							id={'phoneNumber'}
							name={'phoneNumber'}
							label={'Phone Number'}
							mask={'(00) 0000 0000'}
							hint={'Hint: Your active phone number.'}
							component={FormMaskedTextBox}
							validator={phoneValidator}
						/>
						<Field
							id={'email'}
							name={'email'}
							label={'Email'}
							hint={'Hint: Enter your personal email address.'}
							type={'email'}
							component={FormInput}
							validator={emailValidator}
						/>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Field
								id={'arrivalDate'}
								name={'arrivalDate'}
								label={'Arrival Date'}
								hint={'Hint: Should be greater than today.'}
								component={FormDatePicker}
								validator={arrivalDateValidator}
								wrapperStyle={{ width: '90%', marginRight: '18px' }}
							/>
							<Field
								id={'nightsCount'}
								name={'nightsCount'}
								label={'Number of Nights'}
								format={'n0'}
								component={FormNumericTextBox}
								validator={nightsValidator}
							/>
						</div>
						<Field
							id={'comments'}
							name={'comments'}
							label={'Comments'}
							optional={true}
							component={FormTextArea}
						/>
						<span className={'k-form-separator'} />
						<Field
							id={'terms'}
							name={'terms'}
							label={'I agree with the Terms and Conditions'}
							component={FormCheckBox}
							validator={termsValidator}
						/>
						<div className={"k-form-buttons"}>
							<Button themeColor={"primary"} type={'submit'} disabled={!formRenderProps.allowSubmit}>
								Send Reservation Request
							</Button>
							<Button onClick={formRenderProps.onFormReset}>Clear</Button>
						</div>
					</fieldset>
				</FormElement>
			)}
		/>
	);
}