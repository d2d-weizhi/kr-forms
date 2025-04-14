import React from "react";
import { Form, Field, FormElement, FormRenderProps } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { 
	FormDropDownList,
	FormAutoComplete,
	FormComboBox,
	FormDropDownTree,
	FormMultiColumnComboBox
} from "./shared/form-components";
import { requiredValidator } from "./shared/validators";
import { countries, employees, genders, sizes, equipment } from "./shared/data";

export default function DropDownsForm() {
	const handleSubmit = (dataItem: { [name: string]: any }) => console.log(JSON.stringify(dataItem, null, 2));

	return(
		<Form
			onSubmit={handleSubmit}
			render={(formRenderProps: FormRenderProps) => (
				<FormElement style={{ width: 550 }}>
					<Field 
						id={"countryselected"}
						name={"countryselected"}
						label={"Country"}
						hint={"Hint: Only European countries"}
						component={FormAutoComplete}
						validator={requiredValidator}
						data={countries}
					/>
					<Field 
						id={"genderselected"}
						name={"genderselected"}
						label={"Gender"}
						component={FormComboBox}
						textField={"label"}
						data={genders}
						validator={requiredValidator}
					/>
					<Field 
						id={"name"}
						name={"name"}
						label={"Name and Position"}
						hint={"Hint: Only employees"}
						component={FormMultiColumnComboBox}
						validator={requiredValidator}
						data={employees}
					/>
					<Field 
						id={"equipment"}
						name={"equipment"}
						label={"Home Equipment"}
						textField={"text"}
						dataItemKey={"id"}
						selectField={"selected"}
						expandField={"expanded"}
						component={FormDropDownTree}
						data={equipment}
						validator={requiredValidator}
					/>
					<Field 
						id={"size"}
						name={"size"}
						label={"T-Shirt Size"}
						component={FormDropDownList}
						data={sizes}
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