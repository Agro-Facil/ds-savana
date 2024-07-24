import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { TextInput as RNTextInput, TextInputProps, View, Pressable, NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";
import { TextFieldStyles } from "./styles";
import { ContextTheme } from "../../provider";
import { Eye, EyeOff } from 'lucide-react-native';
import { Text } from './../text';
import { IUseForm, FieldRules, WithFormRequired, WithFormOptional } from "../../hook/useForm";
import { isObject } from "../../utils/isObject";

export interface TextFieldBaseProps extends Omit<TextInputProps, 'onChange' | 'onBlur'> {
  name: string;
  label?: string;
  type?: 'text' | 'password';
  hint?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange?: (text: string) => FieldRules | void;
  onBlur?: (text: string) => FieldRules | void;
}

export type TextFieldProps = TextFieldBaseProps & (WithFormRequired | WithFormOptional);

const applyMask = (text: string, rules: FieldRules) => {
  if ('mask' in rules) {
    const rule = (isObject(rules.mask) ? rules.mask : { value: rules.mask }) as { value: RegExp };
    return text.replace(rule?.value, '');
  }
  return text;
};

const handleValidation = (
  text: string,
  rules: FieldRules,
  form: IUseForm,
  name: string
) => {
  text = applyMask(text, rules);

  Object.entries(rules).forEach(([key, value]) => {
    const rule = isObject(value()) ? value() : { value, hint: 'O campo está inválido' };

    if (key === 'validate' && !rule.value) {
      form.setError(name, rule.hint);
    } else if (form.errors[name]) {
      form.clearError(name)
    }
  });

  return text;
};

export const TextField = ({
  label,
  form,
  name,
  type = 'text',
  hint,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  onChange,
  onBlur,
  children,
  ...props
}: PropsWithChildren<TextFieldProps>): JSX.Element => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const config = useContext(ContextTheme);
  const styles = TextFieldStyles(config);
  const placeholderTextColor = (form?.errors[name] || isInvalid) ? config.colors.error : config.colors.dark;

  const inputRef = useRef<RNTextInput>(null);

  const handleLabelPress = () => inputRef.current?.focus();

  useEffect(() => {
    if (form) {
      form.registerRequired(name, isRequired);

      if (!(name in form.values)) {
        form.registerField(name, 'string');
      }
    }
  }, []);

  const handleEndEditing = (event: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
    let text = event.nativeEvent.text;

    if (form && onBlur) {
      text = handleValidation(text, onBlur(text)!, form, name);
      form.handleChange(name, text);
    }

    props.onEndEditing?.(event);
  };

  const handleChangeText = (text: string) => {
    if (form && onChange) {
      text = handleValidation(text, onChange(text)!, form, name);
    }
    form?.handleChange(name, text);
    props.onChangeText?.(text);
  };

  return (
    <View style={styles.container}>
      <Text
        onPress={handleLabelPress}
        style={[styles.label, isDisabled && styles.labelDisabled]}
      >
        {label}
        {isRequired && <Text style={{ color: config.colors.error }}> *</Text>}
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
            (isInvalid || !!form?.errors[name]) && styles.inputInvalid,
          ]}
          onChangeText={handleChangeText}
          onEndEditing={handleEndEditing}
          value={form?.values[name] as string ?? props.value}
        />
        {type === 'password' && (
          <Pressable style={styles.eye} onPress={() => setIsVisiblePassword(!isVisiblePassword)}>
            {isVisiblePassword ? <Eye color={config.colors.dark} /> : <EyeOff color={config.colors.dark} />}
          </Pressable>
        )}
      </View>
      <Text style={[
        styles.hint,
        (isInvalid || !!form?.errors[name]) && styles.hintInvalid
      ]}>
        {form?.errors[name] || hint}
      </Text>
    </View>
  );
};

export default TextField;
