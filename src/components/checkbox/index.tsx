import React, { PropsWithChildren, useContext, useState } from "react";
import { ContextTheme } from "../../provider";
import { CheckboxStyles } from "./styles";
import { Pressable, View } from "react-native";
import { Check } from "lucide-react-native";
import { Text } from './../text'

export interface CheckboxProps {
  label?: string
  hint?: string
  defaultIsChecked?: boolean
  onChange?: (isSelected: boolean) => void;
  isDisabled?: boolean
  isInvalid?: boolean;
}

export const Checkbox = ({ defaultIsChecked = false, label, hint, onChange, isDisabled, isInvalid }: PropsWithChildren<CheckboxProps>): JSX.Element => {
  const [value, setValue] = useState(defaultIsChecked)
  const config = useContext(ContextTheme);
  const styles = CheckboxStyles(config)

  const handleChangeValue = () => {
    onChange && onChange(!value)
    setValue(!value)
  }

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
          {value && (
            <Check
              color={isInvalid ? config.colors.error : config.colors.secondary}
              size={16}
            />
          )}
        </Pressable>
        {label && (
          <Text
            style={[
              styles.label,
              isDisabled && styles.labelDisabled,
              isInvalid && styles.labelInvalid
            ]}
          >
            {label}
          </Text>
        )}
      </Pressable>
      {hint && (
        <Text
          style={[
            styles.hint,
            isInvalid && styles.hintInvalid
          ]}
        >
          {label}
        </Text>
      )}
    </View>
  )
}

export default Checkbox