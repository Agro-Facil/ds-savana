import React, { PropsWithChildren, useContext, useRef, useState } from "react";
import { Text, TextInput as RNTextInput, TextInputProps, View, Pressable } from "react-native"
import { TextFieldStyles } from "./styles"
import { ContextTheme } from "../provider";
import { Eye, EyeOff } from 'lucide-react-native'

export interface TextFieldProps extends TextInputProps {
  label?: string
  type?: 'text' | 'password'
  hint?: string
  isDisabled?: boolean
  isInvalid?: boolean
}

export const TextField = ({ label, type = 'text', hint, isDisabled, isInvalid, children, ...props }: PropsWithChildren<TextFieldProps>): JSX.Element => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  const config = useContext(ContextTheme);
  const styles = TextFieldStyles(config)
  const placeholderTextColor = isInvalid ? config.colors.error : config.colors.dark

  const inputRef = useRef<RNTextInput>(null);

  const handleLabelPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View
      style={styles.container}
    >
      <Text
        onPress={handleLabelPress}
        style={[
          styles.label,
          isDisabled && styles.labelDisabled
        ]}
      >
        {label}
      </Text>
      <View style={styles.containerInput}>
        <RNTextInput
          {...props}
          ref={inputRef}
          placeholderTextColor={placeholderTextColor}
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
          secureTextEntry={type === 'password' && !isVisiblePassword}
          style={[
            styles.input,
            isDisabled && styles.inputDisabled,
            isInvalid && styles.inputInvalid
          ]}
        />
        {type === 'password' && (
          <Pressable
            style={styles.eye}
            onPress={() => setIsVisiblePassword(!isVisiblePassword)}
          >
            {isVisiblePassword ?
              (
                <Eye color={config.colors.dark} />
              ) : (
                <EyeOff color={config.colors.dark} />
              )}
          </Pressable>
        )}
      </View>
      {hint && (
        <Text style={[styles.hint, isInvalid && styles.hintInvalid]}>
          {hint}
        </Text>
      )}
    </View>
  )
}

export default TextField