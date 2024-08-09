import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Button, Card, Carousel, Text, CarouselItem, Checkbox, Fab, Icon, PreviewUpload, Radio, RadioGroup, SelectField, Swipeable, Switch, TextField, Upload, useForm, useToast } from '../../src/index'
import { defaultTheme } from '../../src/provider';
import { MessageSquareText, Pencil, Plus } from 'lucide-react-native';
import ActionSheet from '../../src/components/actionsheet';

export default function Hooks() {
  const [open, setOpen] = useState(false)
  const toast = useToast()
  const form = useForm({
    category: {
      label: 'teste',
      value: 'teste'
    },
    name: 'teste1',
    terms: true
  });

  const onSubmit = () => {
    toast.addToast('teste', { type: 'success', duration: 2000 })
    console.log(form.values);
  };

  return (
    <View style={styles.view}>{/*
      <TextField
        form={form}
        name='name'
        label='Nome'
        icons={[<Plus color={'black'} />, <Plus color={'black'} />]}
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
      <Button onPress={() => setOpen(!open)}>
        teste
      </Button>
      <ActionSheet open={open} onOpen={() => setOpen(!open)}>
        <Carousel>
          <CarouselItem>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1722136682317-a06fda3ebeba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }}
              style={styles.image}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1722325009084-6bfc230f0860?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }}
              style={styles.image}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }}
              style={styles.image}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1721212771104-f3e1cb0686ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }}
              style={styles.image}
            />
          </CarouselItem>
        </Carousel>
      </ActionSheet>
      <Carousel>
        <CarouselItem>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1722136682317-a06fda3ebeba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.image}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1722325009084-6bfc230f0860?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.image}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.image}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1721212771104-f3e1cb0686ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.image}
          />
        </CarouselItem>
      </Carousel> */}
      {/*
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
      <Swipeable
        backgroundMenu={{
          label: 'Editar',
          icon: <Pencil color='white' />,
          onPress: () => {
            console.log('ola')
          },
        }}
      >
        <Card>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
          <Text>teste</Text>
        </Card>
      </Swipeable>*/}
      <PreviewUpload
        data={[{
          name: 'buraco-rua.png',
          type: 'image',
          src: 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/02/07/aef38022b0b5da27e62c15b7541c9754cb9253d3.jpeg'
        }, {
          name: 'buraco-rua.png',
          type: 'video',
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }, {
          name: 'buraco-rua.png',
          type: 'image',
          src: 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/02/07/aef38022b0b5da27e62c15b7541c9754cb9253d3.jpeg'
        }, {
          name: 'buraco-rua.png',
          type: 'image',
          src: 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/02/07/aef38022b0b5da27e62c15b7541c9754cb9253d3.jpeg'
        }, {
          name: 'buraco-rua.png',
          type: 'image',
          src: 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/02/07/aef38022b0b5da27e62c15b7541c9754cb9253d3.jpeg'
        }]}
      />
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
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
});