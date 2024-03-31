/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SignUpDataCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    provider?: boolean;
};
export declare type SignUpDataCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    provider?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpDataCreateFormOverridesProps = {
    SignUpDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    provider?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SignUpDataCreateFormProps = React.PropsWithChildren<{
    overrides?: SignUpDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SignUpDataCreateFormInputValues) => SignUpDataCreateFormInputValues;
    onSuccess?: (fields: SignUpDataCreateFormInputValues) => void;
    onError?: (fields: SignUpDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpDataCreateFormInputValues) => SignUpDataCreateFormInputValues;
    onValidate?: SignUpDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function SignUpDataCreateForm(props: SignUpDataCreateFormProps): React.ReactElement;
