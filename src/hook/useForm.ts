import { useEffect, useState } from 'react';
import { NativeSyntheticEvent } from 'react-native';

export type WithFormRequired = {
  isRequired: true;
  form: IUseForm;
};

export type WithFormOptional = {
  isRequired?: false;
  form?: IUseForm;
};

type Value = string | number | boolean | null | undefined

interface FormValues {
  [key: string]: Value;
}

interface Errors {
  [key: string]: string;
}

type HandleChange = (name: string, value: string | boolean) => void

type HandleSubmit = (callback: () => void) => (event: NativeSyntheticEvent<any>) => void

type RegisterField = (name: string, type?: Value) => void

type RegisterRequired = (name: string, isRequired?: boolean) => void

type SetError = (name: string, hint: string) => void

type ClearError = (name: string) => void

export interface IUseForm {
  values: FormValues
  errors: Errors
  registerRequired: RegisterRequired
  setErrors: React.Dispatch<React.SetStateAction<Errors>>
  setError: SetError
  clearError: ClearError
  handleChange: HandleChange
  handleSubmit: HandleSubmit
  registerField: RegisterField
}

export interface FieldRules {
  mask?: RegExp | { value: RegExp, hint: string }
  validate?: () => { value: boolean, hint: string}
}

const useForm = (defaultValues?: FormValues) => {
  const [required, setRequired] = useState({})
  const [values, setValues] = useState<FormValues>(defaultValues ?? {});
  const [errors, setErrors] = useState<Errors>({});

  const registerRequired: RegisterRequired = (name, isRequired) => {
    setRequired((prevValues) => ({
      ...prevValues,
      [name]: isRequired,
    }));
  };

  const handleChange: HandleChange = (name, value) => {
    if (required[name as keyof typeof required] && value) {
      if (errors[name] === 'O campo é obrigatório') {
        const { [name]: removed, ...newErrors } = errors;
        setErrors(newErrors);
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const isValid = (isSubmit?: boolean): boolean => {
    if (isSubmit) {
      const newErrors: any = {};

      Object.entries(required).forEach(([key, value]) => {
        if (value && !values[key]) {
          newErrors[key] = 'O campo é obrigatório';
        }
      });

      setErrors((prevValues) => ({
        ...prevValues,
        ...newErrors,
      }));

      return Object.keys(newErrors).length === 0 && Object.keys(errors).length === 0;
    }

    return Object.keys(errors).length === 0
  };

  const handleSubmit: HandleSubmit = (callback) => (event) => {
    event.preventDefault();
    if (isValid(true)) {
      callback();
    }
  };

  const registerField: RegisterField = (name, type) => {
    if (!(name in values)) {
      const defaultValues = {
        'string': '',
        'number': 0,
        'boolean': false,
        'null': null,
        'undefined': undefined
      }

      setValues((prevValues) => ({
        ...prevValues,
        [name]: defaultValues[type as keyof typeof defaultValues],
      }));
    }
  };

  const setError: SetError = (name, hint) => {
    setErrors((prevValues) => ({
      ...prevValues,
      [name]: hint,
    }));
  }

  const clearError: ClearError = (name) => {
    const newErrors = errors
    delete newErrors[name];
    setErrors(newErrors);
  }

  return {
    values,
    errors,
    setErrors,
    setError,
    clearError,
    registerRequired,
    isValid,
    handleChange,
    handleSubmit,
    registerField,
  };
};

export default useForm;
