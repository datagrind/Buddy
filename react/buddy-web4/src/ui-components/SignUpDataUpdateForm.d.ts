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
export declare type SignUpDataUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    provider?: boolean;
};
export declare type SignUpDataUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    provider?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpDataUpdateFormOverridesProps = {
    SignUpDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    provider?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SignUpDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: SignUpDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    signUpData?: any;
    onSubmit?: (fields: SignUpDataUpdateFormInputValues) => SignUpDataUpdateFormInputValues;
    onSuccess?: (fields: SignUpDataUpdateFormInputValues) => void;
    onError?: (fields: SignUpDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpDataUpdateFormInputValues) => SignUpDataUpdateFormInputValues;
    onValidate?: SignUpDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SignUpDataUpdateForm(props: SignUpDataUpdateFormProps): React.ReactElement;
