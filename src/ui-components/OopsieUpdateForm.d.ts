/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Oopsie } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OopsieUpdateFormInputValues = {
    username?: string;
    location?: string;
    date_time?: string;
    coordinates?: string;
    drawing_path?: string;
};
export declare type OopsieUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date_time?: ValidationFunction<string>;
    coordinates?: ValidationFunction<string>;
    drawing_path?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OopsieUpdateFormOverridesProps = {
    OopsieUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date_time?: PrimitiveOverrideProps<TextFieldProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
    drawing_path?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OopsieUpdateFormProps = React.PropsWithChildren<{
    overrides?: OopsieUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oopsie?: Oopsie;
    onSubmit?: (fields: OopsieUpdateFormInputValues) => OopsieUpdateFormInputValues;
    onSuccess?: (fields: OopsieUpdateFormInputValues) => void;
    onError?: (fields: OopsieUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OopsieUpdateFormInputValues) => OopsieUpdateFormInputValues;
    onValidate?: OopsieUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OopsieUpdateForm(props: OopsieUpdateFormProps): React.ReactElement;
