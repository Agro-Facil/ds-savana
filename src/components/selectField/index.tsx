import React, { useContext, useEffect, useRef, useState } from "react";
import { ContextTheme } from "../../provider";
import { SelectFieldStyles } from "./styles";
import { Text, StyleProp, TextStyle, View, Pressable, TouchableHighlight, FlatList, Animated } from "react-native";
import ActionSheet from "../actionsheet";
import { WithFormOptional, WithFormRequired } from "../../hook/useForm";
import { ChevronDown, CircleX } from "lucide-react-native";

export interface SelectOption {
  label: string | number
  value: string | number
}

export interface SelectFieldBaseProps {
  options: SelectOption[]
  name: string
  label?: string
  hint?: string;
  placeholder?: string
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  defaultValue?: SelectOption
  onChange?: (option: SelectOption | null) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl'
  sx?: StyleProp<TextStyle>
}

export type SelectFieldProps = SelectFieldBaseProps & (WithFormRequired | WithFormOptional);

export const SelectField = ({
  name,
  form,
  options,
  label,
  hint,
  onChange,
  placeholder,
  defaultValue,
  isDisabled,
  isInvalid,
  isRequired
}: SelectFieldProps): JSX.Element => {
  const [optionSelect, setOptionSelect] = useState<SelectOption | null>(form?.values[name] as SelectOption || defaultValue)
  const [valueChanged, setValueChanged] = useState(false)
  const config = useContext(ContextTheme);
  const styles = SelectFieldStyles(config);
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!valueChanged) {
      if (form?.values[name]) {
        setOptionSelect(form?.values[name] as SelectOption)
        return;
      }

      if (defaultValue) {
        setOptionSelect(defaultValue)
      }
    }

    if (form) {
      form.registerRequired(name, isRequired);

      if (!(name in form.values)) {
        form.registerField(name, 'null');
      }
    }
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [open]);

  const textColor = () => {
    if (form?.errors[name] || isInvalid) {
      return config.colors.error;
    }

    if (!optionSelect?.label) {
      return config.colors.dark;
    }

    return undefined;
  };

  const rotateChevron = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  return (
    <View>
      {label && (
        <Text
          style={[
            styles.label,
            isDisabled && styles.labelDisabled
          ]}
        >
          {label}
          {isRequired && <Text style={{ color: config.colors.error }}> *</Text>}
        </Text>
      )}
      <View style={styles.containerInput}>
        <Pressable
          style={[
            styles.select,
            (isInvalid || !!form?.errors[name]) && styles.selectInvalid,
          ]}
          onPress={() => {
            setOpen(!open)
          }}
        >
          <Text
            style={{ color: textColor() }}
          >
            {optionSelect?.label || placeholder}
          </Text>
          <View style={styles.containerIcons}>
            {(optionSelect?.label) && (
              <Pressable
                onPress={() => {
                  setOptionSelect(null)
                  onChange?.(null)
                  form?.handleChange(name, null);
                }}
              >
                <CircleX size={20} color={config.colors.secondary} />
              </Pressable>
            )}
            <Animated.View style={{ marginLeft: config.space[4], transform: [{ rotate: rotateChevron }] }}>
              <ChevronDown size={20} color={config.colors.secondary} />
            </Animated.View>
          </View>
        </Pressable>
      </View>
      <Text style={[
        styles.hint,
        (isInvalid || !!form?.errors[name]) && styles.hintInvalid
      ]}>
        {form?.errors[name] || hint}
      </Text>
      <ActionSheet open={open} onOpen={() => setOpen(!open)}>
        {options && (
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={config.colors.light}
                onPress={() => {
                  setValueChanged(true)
                  setOptionSelect(item)
                  onChange?.(item)
                  form?.handleChange(name, item);
                  setOpen(!open)
                }}
              >
                <Text style={styles.option}>{item.label}</Text>
              </TouchableHighlight >
            )}
          />
        )}
      </ActionSheet>
    </View>
  )
}

export default SelectField