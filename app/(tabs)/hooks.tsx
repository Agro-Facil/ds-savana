import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Checkbox, Fab, Radio, RadioGroup, SelectField, Switch, TextField, Upload, useForm } from '../../src/index'
import { defaultTheme } from '../../src/provider';

export default function Hooks() {
  const form = useForm({
    category: {
      label: 'teste',
      value: 'teste'
    },
    name: 'teste1',
    terms: true
  });

  const onSubmit = () => {
    console.log(form.values);
  };

  return (
    <View style={styles.view}>{/*
      <SelectField
        form={form}
        label='Categoria'
        name='category'
        placeholder='Escolha sua categoria'
        options={[
          {
            label: 'teste',
            value: 'teste'
          },
          {
            label: 'teste1',
            value: 'teste1'
          },
          {
            label: 'teste2',
            value: 'teste2'
          },
          {
            label: 'teste3',
            value: 'teste3'
          },
        ]}
      />
      <RadioGroup
        name='radio1'
        form={form}
      >
        <Radio
          label='teste'
          name='teste'
        />
        <Radio
          label='teste1'
          name='teste1'
        />
        <Radio
          label='teste2'
          name='teste2'
        />
      </RadioGroup>
      <TextField
        form={form}
        name='name'
        label='Nome'
        placeholder='Nome'
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
      />
      <Switch
        form={form}
        name='terms2'
      />
      <Button sx={{ marginTop: defaultTheme.space[8] }} isDisabled={!form.isValid()} onPress={form.handleSubmit(onSubmit)}>
        Enviar
      </Button>
      */}
      <Upload type='file' />{/*
      <Upload type='file' />
      <Upload type='photo' /> */}
      <Fab />
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