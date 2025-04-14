import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { 
	FormNumericTextBox,
	FormInput,
	FormMaskedTextBox,
	FormColorPicker,
	FormSwitch,
	FormSlider,
	FormRangeSlider,
	FormTextArea,
	FormRating
} from "./shared/form-components";

import { nameValidator, colorValidator, phoneValidator, addressValidator } from "./shared/validators";

export default function InputsForm() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return (
		<Form 
			onSubmit={handleSubmit}
			initialValues={{
				amount: 0
			}}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"fullName"}
						name={"fullName"}
						label={"Full Name"}
						component={FormInput}
						validator={nameValidator}
					/>
					<Field 
						id={"phoneNumber"}
						name={"phoneNumber"}
						label={"Phone Number"}
						hint={"Hint: Your active phone number."}
						mask={"(00) 0000 0000"}
						component={FormMaskedTextBox}
						validator={phoneValidator}
					/>
					<Field 
						id={"amount"}
						name={"amount"}
						hint={"Hint: Amount of money."}
						format={"n2"}
						component={FormNumericTextBox}
					/>
					<Field 
						id={"address"}
						name={"address"}
						label={"Address"}
						hint={"Hint: Enter your residential address."}
						component={FormTextArea}
						validator={addressValidator}
					/>
					<Field 
						id={"color"}
						name={"color"}
						label={"Choose a Color"}
						component={FormColorPicker}
						validator={colorValidator}
					/>
					<Field 
						id={"size"}
						name={"size"}
						label={"Size"}
						hint={"Hint: Choose your size"}
						min={1}
						max={10}
						component={FormSlider}
						data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					/>
					<Field 
						id={"priceLimit"}
						name={"priceLimit"}
						label={"Price Limit"}
						hint={"Hint: Choose a price range"}
						step={1}
						min={0}
						max={100}
						component={FormRangeSlider}
						data={[0, 20, 30, 50, 70, 80, 100]}
					/>
					<Field 
						id={"rating"}
						name={"rating"}
						label={"Rate your experience"}
						component={FormRating}
						option={true}
					/>
					<Field 
						id={"notifications"}
						name={"notifications"}
						label={"Allow notifications"}
						component={FormSwitch}
						optional={true}
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