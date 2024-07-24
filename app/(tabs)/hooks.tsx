import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Checkbox, TextField, VStack, useForm } from '../../src/index'
import { defaultTheme } from '../../src/provider';

export default function Hooks() {
  const form = useForm();

  const onSubmit = () => {
    console.log(form.values);
  };


  return (
    <View style={styles.view}>
      <TextField
        form={form}
        name='name'
        label='Nome'
        placeholder='Nome'
        isRequired
        onBlur={(value) => {
          return {
            validate: () => {
              return {
                value: value.trim().includes(' '),
                hint: 'Um nome deve conter duas partes'
              }
            }
          }
        }}
      />
      <TextField
        form={form}
        name='email'
        label='Email'
        placeholder='Email'
        isRequired
        onBlur={(value) => {
          return {
            validate: () => {
              return {
                value: !!value?.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                hint: 'Esse e-mail não é válido'
              }
            }
          }
        }}
      />
      <TextField
        form={form}
        name='password'
        label='Senha'
        placeholder='Senha'
        isRequired
        onChange={(value) => {
          if (form.values.confirmPassword === value) {
            form.clearError('confirmPassword')
          }

          return {
            validate: () => {
              return {
                value: value?.length >= 8,
                hint: 'A senha deve conter 8 caracteres'
              }
            }
          }
        }}
      />
      <TextField
        form={form}
        name='confirmPassword'
        label='Confirmar senha'
        placeholder='Confirme sua senha'
        isRequired
        onChange={(value) => {
          return {
            validate: () => {
              if (value?.length < 8) {
                return {
                  value: value?.length >= 8,
                  hint: 'A senha deve conter 8 caracteres'
                }
              }

              return {
                value: form.values.password === value,
                hint: 'As senhas não se coincidem'
              }
            }
          }
        }}
      />
      <Checkbox
        form={form}
        name='terms'
        isRequired
      />
      <Button sx={{ marginTop: defaultTheme.space[8] }} isDisabled={!form.isValid()} onPress={form.handleSubmit(onSubmit)}>
        Enviar
      </Button>
    </View>
  );
}

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 50,
  }
});