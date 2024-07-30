import React, { createContext, useState, ReactNode, PropsWithChildren, useEffect } from 'react';
import { View } from 'react-native';
import { WithFormOptional, WithFormRequired } from '../../hook/useForm';

interface RadioGroupBaseProps {
  name: string
  onChange?: (option: string) => void
  defaultValue?: string
}

export type RadioGroupProps = RadioGroupBaseProps & (WithFormRequired | WithFormOptional);

interface RadioGroupBaseContextType {
  name: string
  selectedValue: string;
  onValueChange: (option: string) => void;
  defaultValue?: string
}

export type RadioGroupContextType = RadioGroupBaseContextType & (WithFormRequired | WithFormOptional);

export const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

export const RadioGroup = ({ name, children, onChange, isRequired, defaultValue, form }: PropsWithChildren<RadioGroupProps>) => {
  const [selectedValue, setSelectedValue] = useState<string | null>((form?.values[name] as string || defaultValue) ?? null);

  const onValueChange = (value: string) => {
    onChange?.(value)
    setSelectedValue(value);
  };

  useEffect(() => {
    if (!defaultValue && React.Children.count(children) > 0) {
      const firstChild = React.Children.toArray(children)[0];
      if (React.isValidElement(firstChild) && firstChild.props.name) {
        const firstValue = firstChild.props.name;
        onValueChange(firstValue);
        form?.handleChange(name, firstValue)
      }
    }
  }, []);

  return (
    <RadioGroupContext.Provider value={{ form, isRequired, name, defaultValue, selectedValue, onValueChange } as RadioGroupContextType}>
      <View>
        {children}
      </View>
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;
