import React, { useRef } from 'react';
import { FieldRenderProps, FieldWrapper } from '@progress/kendo-react-form';
import { 
  Input,
  MaskedTextBox,
  NumericTextBox,
  Checkbox,
  ColorPicker,
  Switch,
  RadioGroup,
  Slider,
  SliderLabel,
  RangeSlider,
  TextArea,
  Rating
} from '@progress/kendo-react-inputs';
import { DatePicker, TimePicker, DateTimePicker, DateRangePicker, DateInput } from '@progress/kendo-react-dateinputs';
import { Label, Error, Hint, FloatingLabel } from '@progress/kendo-react-labels';
import { Upload } from '@progress/kendo-react-upload';
import { 
  DropDownList,
  AutoComplete,
  MultiSelect,
  ComboBox,
  MultiColumnComboBox,
  DropDownTree
} from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './tree-data-operations';
import { AnyARecord } from 'node:dns';

interface columnsInterface {
	field: string;
	header: any;
	width: string;
}

export const FormInput = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, type, optional, ...others } = fieldRenderProps;
	
	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error`: '';

	return (
		<FieldWrapper>
			<Label
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={"k-form-field-wrap"}>
				<Input 
					valid={valid}
					type={type}
					id={id}
					disabled={disabled}
					ariaDescribedBy={`${hintId} ${errorId}`}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormRadioGroup = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, id, label, valid, disabled, hint, visited, modified, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper>
			<Label
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				className={"k-form-label"}
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<RadioGroup 
					ariaDescribedBy={`${hintId} ${errorId}`}
					ariaLabelledBy={labelId}
					valid={valid}
					disabled={disabled}
					ref={editorRef}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormNumericTextBox = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		<FieldWrapper>
			<Label editorId={id} editorValid={valid} editorDisabled={disabled} className="k-form-label">
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<NumericTextBox 
					ariaDescribedBy={`${hintId} ${errorId}`}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormCheckBox = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, id, valid, disabled, hint, optional, label, visited, modified, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		<FieldWrapper>
			<div className={'k-form-field-wrap'}>
				<Checkbox 
					ariaDescribedBy={`${hintId} ${errorId}`}
					label={label}
					labelOptional={optional}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormSwitch = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, optional, id, valid, disabled, hint, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper>
			<Label
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<Switch 
					ref={editorRef}
					ariaLabelledBy={labelId}
					ariaDescribedBy={`${hintId} ${errorId}`}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormMaskedTextBox = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, hint, optional, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		<FieldWrapper>
			<Label
				editorId={id}
				editorValid={valid}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<MaskedTextBox 
					ariaDescribedBy={`${hintId} ${errorId}`}
					valid={valid}
					id={id}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormTextArea = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, hint, disabled, optional, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		<FieldWrapper>
			<Label
				editorId={id}
				editorValid={valid}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<TextArea 
					valid={valid}
					id={id}
					disabled={disabled}
					ariaDescribedBy={`${hintId} ${errorId}`}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormColorPicker = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper style={wrapperStyle}>
			<Label
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<ColorPicker 
					ariaLabelledBy={labelId}
					ariaDescribedBy={`${hintId} ${errorId}`}
					ref={editorRef}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormSlider = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, data, min, max, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper>
			<Label 
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<Slider 
					ariaLabelledBy={labelId}
					ariaDescribedBy={`${hintId} ${errorId}`}
					ref={editorRef}
					valid={valid}
					id={id}
					disabled={disabled}
					min={min}
					max={max}
					{...others}
				>
					{data.map((value: any) =>(
						<SliderLabel title={value} key={value} position={value}>
							{value.toString()}
						</SliderLabel>
					))}
				</Slider>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormRangeSlider = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, hint, disabled, data, min, max, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		<FieldWrapper>
			<Label editorId={id} editorValid={valid} className="k-form-label">
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<RangeSlider
					valid={valid}
					id={id}
					disabled={disabled}
					ariaDescribedBy={`${hintId} ${errorId}`}
					min={min}
					max={max}
					{...others}
				>
					{data.map((value: any) => {
						return (
							<SliderLabel key={value} position={value}>
								{value.toString()}
							</SliderLabel>
						);
					})}
				</RangeSlider>
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormRating = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, hint, disabled, optional, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';

	return (
		 <FieldWrapper>
			<Label
				editorId={id}
				editorValid={valid}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<Rating 
					valid={valid}
					id={id}
					disabled={disabled}
					ariaDescribedBy={`${hintId} ${errorId}`}
					{...others}
				/>
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		 </FieldWrapper>
	);
};

export const FormUpload = (fieldRenderProps: FieldRenderProps) => {
	const { value, id, optional, label, hint, validationMessage, touched, ...others } = fieldRenderProps;

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	const onChangeHandler = (event: any) => {
		fieldRenderProps.onChange({ value: event.newState });
	};

	const onRemoveHandler = (event: any) => {
		fieldRenderProps.onChange({ value: event.newState });
	};

	return (
		<FieldWrapper>
			<Label
				id={labelId}
				editorId={id}
				optional={optional}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<Upload 
					id={id}
					autoUpload={false}
					showActionButtons={false}
					multiple={false}
					files={value}
					onAdd={onChangeHandler}
					onRemove={onChangeHandler}
					ariaDescribedBy={`${hintId} ${errorId}`}
					ariaLabelledBy={labelId}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormDropDownList = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper style={wrapperStyle}>
			<Label
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<DropDownList 
					ariaLabelledBy={labelId}
					ariaDescribedBy={`${hintId} ${errorId}`}
					ref={editorRef}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

export const FormAutoComplete = (fieldRenderProps: FieldRenderProps) => {
	const { validationMessage, touched, label, id, valid, disabled, hint, wrapperStyle, ...others } = fieldRenderProps;
	const editorRef = useRef<any>(null);

	const showValidationMessage: string | false | null = touched && validationMessage;
	const showHint: boolean = !showValidationMessage && hint;
	const hintId: string = showHint ? `${id}_hint` : '';
	const errorId: string = showValidationMessage ? `${id}_error` : '';
	const labelId: string = label ? `${id}_label` : '';

	return (
		<FieldWrapper style={wrapperStyle}>
			<Label
				id={labelId}
				editorRef={editorRef}
				editorId={id}
				editorValid={valid}
				editorDisabled={disabled}
				className="k-form-label"
			>
				{label}
			</Label>
			<div className={'k-form-field-wrap'}>
				<AutoComplete 
					ariaLabelledBy={labelId}
					ariaDescribedBy={`${hintId} ${errorId}`}
					ref={editorRef}
					valid={valid}
					id={id}
					disabled={disabled}
					{...others}
				/>
				{showHint && <Hint id={hintId}>{hint}</Hint>}
				{showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
			</div>
		</FieldWrapper>
	);
};

// Continue from ComboBox