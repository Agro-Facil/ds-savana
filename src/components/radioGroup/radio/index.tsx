import React, { useContext, useEffect } from "react";
import { Pressable, View } from "react-native";
import { RadioStyles } from "./styles";
import { ContextTheme } from "../../../provider";
import { Text } from '../../text';
import { RadioGroupContext } from '..';
import { Dot } from "lucide-react-native";

export interface RadioProps {
  name: string;
  label?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  index?: number;
  hint?: string;
}

export const Radio = ({ label, name, hint, isDisabled, isInvalid }: RadioProps): JSX.Element => {
  const context = useContext(RadioGroupContext);

  const isSelected = context?.selectedValue === name;

  const defaultValue = context?.defaultValue === name

  const config = useContext(ContextTheme);
  const styles = RadioStyles(config);

  useEffect(() => {
    if (context?.form) {
      if (context?.form.values[context?.name]) {
        const value = context?.form.values[context?.name] as string
        context?.onValueChange(value);
        context?.form.handleChange(context?.name, value)
      }

      if (defaultValue) {
        context?.form.handleChange(context?.name, defaultValue)
      }
    }
  }, [])

  const handleChangeValue = () => {
    if (context?.form) {
      context?.form.handleChange(context?.name, name)
    }

    if (!isDisabled) {
      context?.onValueChange(name);
    }
  };

  return (
    <View>
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
          {(context?.selectedValue ? isSelected : defaultValue) && (
            <Dot
              color={(isInvalid || !!context?.form?.errors[name]) ? config.colors.error : config.colors.secondary}
              size={48}
            />
          )}
        </Pressable>
        {label && (
          <Text
            style={[
              styles.label,
              isDisabled && styles.labelDisabled,
              (isInvalid || !!context?.form?.errors[name]) && styles.labelInvalid
            ]}
          >
            {label}
            {context?.isRequired && <Text style={{ color: config.colors.error }}> *</Text>}
          </Text>
        )}
      </Pressable>
      <Text
        style={[
          styles.hint,
          (isInvalid || !!context?.form?.errors[name]) && styles.hintInvalid
        ]}
      >
        {context?.form?.errors[name] || hint}
      </Text>
    </View>
  );
};

export default Radio;
