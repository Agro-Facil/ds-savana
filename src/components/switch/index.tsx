import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ContextTheme } from "../../provider";
import { SwitchStyles } from "./styles";
import { Pressable, Switch as RNSwitch, SwitchProps as RNSwitchProps, View } from "react-native";
import { Text } from './../text'
import { IUseForm, WithFormOptional, WithFormRequired } from "../../hook/useForm";

export interface SwitchBaseProps extends Omit<RNSwitchProps, 'onChange'> {
  name: string
  form?: IUseForm
  label?: string
  hint?: string
  defaultValue?: boolean
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean
  isInvalid?: boolean;
  isRequired?: boolean
}

export type SwitchProps = SwitchBaseProps & (WithFormRequired | WithFormOptional);

export const Switch = ({ defaultValue = false, isRequired, form, name, label, hint, onChange, isDisabled, isInvalid }: PropsWithChildren<SwitchProps>): JSX.Element => {
  const [value, setValue] = useState(form?.values[name] as boolean || defaultValue)
  const config = useContext(ContextTheme);
  const styles = SwitchStyles(config)

  const handleChangeValue = () => {
    if (form) {
      form.handleChange(name, value)
    }

    if (onChange) {
      onChange(value)
    }

    setValue(value)
  }

  useEffect(() => {
    if (form) {
      form.registerRequired(name, isRequired);

      if (!(name in form.values)) {
        form.registerField(name, 'boolean', form?.values[name] || defaultValue);
      }
    }
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <Pressable style={styles.container} onPress={handleChangeValue}>
        <RNSwitch
          trackColor={{ false: config.colors.grayLight, true: config.colors.secondaryLight }}
          thumbColor={value ? config.colors.secondary : config.colors.light}
          ios_backgroundColor={config.colors.grayDark}
          onValueChange={handleChangeValue}
          value={value}
        />
        {label && (
          <Text
            style={[
              styles.label,
              isDisabled && styles.labelDisabled,
              (isInvalid || !!form?.errors[name]) && styles.labelInvalid
            ]}
          >
            {label}
            {isRequired && <Text style={{ color: config.colors.error }}> *</Text>}
          </Text>
        )}
      </Pressable>
      <Text
        style={[
          styles.hint,
          (isInvalid || !!form?.errors[name]) && styles.hintInvalid
        ]}
      >
        {form?.errors[name] || hint}
      </Text>
    </View>
  )
}

export default Switch