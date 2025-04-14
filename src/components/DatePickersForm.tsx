import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { 
	FormDatePicker,
	FormTimePicker,
	FormDateTimePicker,
	FormDateInput,
	FormDateRangePicker
} from "./shared/form-components";
import { requiredValidator } from "./shared/validators";

export default function DatePickersForm() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));
	
	return (
		<Form 
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"appointment"}
						name={"appointment"}
						label={"Appointment Date and Time"}
						hint={"Hint: Select Date and Time for your appointment"}
						component={FormDateTimePicker}
						validator={requiredValidator}
					/>
					<Field 
						id={"bdate"}
						name={"bdate"}
						label={"Date of Birth"}
						component={FormDateInput}
						validator={requiredValidator}
					/>
					<Field 
						id={"btime"}
						name={"btime"}
						label={"Time of Birth"}
						component={FormTimePicker}
						validator={requiredValidator}
					/>
					<Field 
						id={"gdate"}
						name={"gdate"}
						label={"Date of Graduation"}
						component={FormDatePicker}
						validator={requiredValidator}
					/>
					<Field 
						id={"subscriptionDate"}
						name={"subscriptionDate"}
						label={"Subscription"}
						component={FormDateRangePicker}
						validator={requiredValidator}
					/>
					<div className="k-form-buttons">
						<Button themeColor={"primary"} type={"submit"} disabled={!formRenderProps.allowSubmit}>
							Submit
						</Button>
						<Button onClick={formRenderProps.onFormReset}>
							Clear
						</Button>
					</div>
				</FormElement>
			)}
		/>
	);
}