/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OopsieCreateFormInputValues = {
    username?: string;
    location?: string;
    date_time?: string;
    coordinates?: string;
    drawing_path?: string;
};
export declare type OopsieCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date_time?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    drawing_path?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OopsieCreateFormOverridesProps = {
    OopsieCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date_time?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    drawing_path?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OopsieCreateFormProps = React.PropsWithChildren<{
    overrides?: OopsieCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OopsieCreateFormInputValues) => OopsieCreateFormInputValues;
    onSuccess?: (fields: OopsieCreateFormInputValues) => void;
    onError?: (fields: OopsieCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OopsieCreateFormInputValues) => OopsieCreateFormInputValues;
    onValidate?: OopsieCreateFormValidationValues;
} & React.CSSProperties>;
export default function OopsieCreateForm(props: OopsieCreateFormProps): React.ReactElement;
