import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ContextTheme } from "../../provider";
import { CheckboxStyles } from "./styles";
import { Pressable, View } from "react-native";
import { Check } from "lucide-react-native";
import { Text } from './../text'
import { IUseForm, WithFormOptional, WithFormRequired } from "../../hook/useForm";

export interface CheckboxBaseProps {
  name: string
  form?: IUseForm
  label?: string
  hint?: string
  defaultIsChecked?: boolean
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean
  isInvalid?: boolean;
  isRequired?: boolean
}

export type CheckboxProps = CheckboxBaseProps & (WithFormRequired | WithFormOptional);

export const Checkbox = ({ defaultIsChecked = false, isRequired, form, name, label, hint, onChange, isDisabled, isInvalid }: PropsWithChildren<CheckboxProps>): JSX.Element => {
  const [value, setValue] = useState(defaultIsChecked)
  const config = useContext(ContextTheme);
  const styles = CheckboxStyles(config)

  const handleChangeValue = () => {
    if (form) {
      form.handleChange(name, !value)
    }

    if (onChange) {
      onChange(!value)
    }

    setValue(!value)
  }

  useEffect(() => {
    if (form) {
      form.registerRequired(name, isRequired);

      if (!(name in form.values)) {
        form.registerField(name, 'boolean');
      }
    }
  }, []);

  return (
    <View style={{ width: '100%' }}>
      <Pressable style={styles.container} onPress={handleChangeValue}>
        <Pressable
          style={[
            styles.checkbox,
            isDisabled && styles.checkboxDisabled,
            isInvalid && styles.checkboxInvalid
          ]}
          disabled={isDisabled}
          onPress={handleChangeValue}
        >
          {value && (
            <Check
              color={(isInvalid || !!form?.errors[name]) ? config.colors.error : config.colors.secondary}
              size={16}
            />
          )}
        </Pressable>
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

export default Checkbox