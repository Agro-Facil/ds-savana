import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ScrollView, FlatList, StatusBar } from 'react-native';
import { Heading, Text, Button, Card, TextField, Checkbox, Link, Pill, Divider, VStack, HStack, AccordionItem, Accordion } from '../../src/index'
import { ChevronLeft, HomeIcon } from 'lucide-react-native';
import { defaultTheme } from '../../src/provider';

export default function TabTwoScreen() {
  const components = [
    'Button',
    'Card',
    'TextField',
    'Checkbox',
    'Link',
    'Divider',
    'VStack',
    'HStack',
    'AccordionItem',
    'Accordion',
    'Text',
    'Heading',
    'Pill'
  ]
  const [component, setComponent] = useState('Button')

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          {component === 'Button' && (
            <>
              <Button size='xxs' icons={[<ChevronLeft color='white' />]} />
              <View style={{ height: 12 }} />
              <Button size='xs' variant='outline' isDisabled={true} onPress={() => console.log('ola')}>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='sm' variant='outline' action='error' onPress={() => console.log('ola')}>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='md' isDisabled={true} >
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='lg'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full' variant='solid' action='error'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full' variant='solid' action='google'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full' variant='solid' action='facebook'>
                Facebook
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full' variant='outline' action='google'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button size='full' variant='outline' action='facebook'>
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button
                size='full'
                icons={[
                  <HomeIcon color='white' />,
                  <HomeIcon color='white' />
                ]}
              >
                Salvar
              </Button>
              <View style={{ height: 12 }} />
              <Button
                size='full'
                icons={[
                  <HomeIcon color='white' />
                ]}
              >
                Salvar
              </Button>
            </>
          )}
          {component === 'Card' && (
            <View style={{ height: 500, width: 400, backgroundColor: 'gray' }}>
              <Card>
                <Text>teste</Text>
              </Card>
            </View>
          )}
          {component === 'TextField' && (
            <>
              <TextField name='teste1' label='Nome' type='password' placeholder='teste' />
              <TextField name='teste2' label='Nome' placeholder='teste' />
              <TextField name='teste3' label='Nome' isDisabled placeholder='teste' />
              <TextField name='teste4' label='Nome' isInvalid placeholder='teste' hint='Erro ao logar' />
              <TextField name='teste5' label='Nome' placeholder='teste' hint='teste' />
            </>
          )}
          {component === 'Checkbox' && (
            <>
              <Checkbox name='teste1' defaultIsChecked={true} />
              <View style={{ height: 12 }} />
              <Checkbox name='teste2' label='teste' />
              <View style={{ height: 12 }} />
              <Checkbox name='teste3' label='teste' isDisabled hint='teste' />
              <View style={{ height: 12 }} />
              <Checkbox name='teste4' label='teste' isInvalid hint='required' />
            </>
          )}
          {component === 'Link' && (
            <>
              <Link isUnderline={false}>
                teste
              </Link>
            </>
          )}
          {component === 'Divider' && (
            <>
              <Divider />
              <Divider label='Ou entre com' />
            </>
          )}
          {component === 'AccordionItem' && (
            <>
              <AccordionItem
                title='Sobre nós'
                icon={<HomeIcon color={defaultTheme.colors.secondary} />}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in faucibus massa. Aenean eu nisi quam. Donec quis eros vel est mattis convallis. Suspendisse tempor ex eget pharetra aliquet. Cras dignissim sed dui non dictum. Aliquam elit libero, sagittis at accumsan non, eleifend id ex. Curabitur ut erat et risus scelerisque bibendum. Maecenas eleifend tortor eget augue auctor, sit amet rhoncus dui sagittis. Nullam id libero euismod, euismod odio ac, vehicula purus. Vivamus rhoncus purus auctor, maximus ligula quis, mattis lacus.
              </AccordionItem>
            </>
          )}
          {component === 'Accordion' && (
            <>
              <Accordion>
                <AccordionItem
                  title='Sobre nós'
                  icon={<HomeIcon color={defaultTheme.colors.secondary} />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in faucibus massa. Aenean eu nisi quam. Donec quis eros vel est mattis convallis. Suspendisse tempor ex eget pharetra aliquet. Cras dignissim sed dui non dictum. Aliquam elit libero, sagittis at accumsan non, eleifend id ex. Curabitur ut erat et risus scelerisque bibendum. Maecenas eleifend tortor eget augue auctor, sit amet rhoncus dui sagittis. Nullam id libero euismod, euismod odio ac, vehicula purus. Vivamus rhoncus purus auctor, maximus ligula quis, mattis lacus.
                </AccordionItem>
                <AccordionItem
                  title='Sobre nós'
                  icon={<HomeIcon color={defaultTheme.colors.secondary} />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in faucibus massa. Aenean eu nisi quam. Donec quis eros vel est mattis convallis. Suspendisse tempor ex eget pharetra aliquet. Cras dignissim sed dui non dictum. Aliquam elit libero, sagittis at accumsan non, eleifend id ex. Curabitur ut erat et risus scelerisque bibendum. Maecenas eleifend tortor eget augue auctor, sit amet rhoncus dui sagittis. Nullam id libero euismod, euismod odio ac, vehicula purus. Vivamus rhoncus purus auctor, maximus ligula quis, mattis lacus.
                </AccordionItem>
                <AccordionItem
                  title='Sobre nós'
                  icon={<HomeIcon color={defaultTheme.colors.secondary} />}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in faucibus massa. Aenean eu nisi quam. Donec quis eros vel est mattis convallis. Suspendisse tempor ex eget pharetra aliquet. Cras dignissim sed dui non dictum. Aliquam elit libero, sagittis at accumsan non, eleifend id ex. Curabitur ut erat et risus scelerisque bibendum. Maecenas eleifend tortor eget augue auctor, sit amet rhoncus dui sagittis. Nullam id libero euismod, euismod odio ac, vehicula purus. Vivamus rhoncus purus auctor, maximus ligula quis, mattis lacus.
                </AccordionItem>
              </Accordion>
            </>
          )}
          {component === 'VStack' && (
            <>
              <VStack space='xl' sx={{ borderColor: 'red', borderWidth: 1 }}>
                <Button size='full'>
                  Salvar
                </Button>
                <Button size='full'>
                  Salvar
                </Button>
              </VStack>
            </>
          )}
          {component === 'HStack' && (
            <>
              <HStack sx={{ borderColor: 'red', borderWidth: 1 }}>
                <Button size='xs'>
                  Salvar
                </Button>
                <Button size='xs'>
                  Salvar
                </Button>
              </HStack>
            </>
          )}
          {component === 'Text' && (
            <>
              <Text size='sm'>
                teste
              </Text>
              <Text size='md'>
                teste
              </Text>
              <Text size='lg'>
                teste
              </Text>
              <Text size='xl'>
                teste
              </Text>
            </>
          )}
          {component === 'Heading' && (
            <>
              <Heading size='sm'>
                teste
              </Heading>
              <Heading size='md'>
                teste
              </Heading>
              <Heading size='lg'>
                teste
              </Heading>
              <Heading size='xl'>
                teste
              </Heading>
            </>
          )}
          {component === 'Pill' && (
            <>
              <Pill>
                Concluído
              </Pill>
              <View style={{ height: 12 }} />
              <Pill color='error'>
                Indeferido
              </Pill>
              <View style={{ height: 12 }} />
              <Pill color='caution'>
                Em análise
              </Pill>
              <View style={{ height: 12 }} />
              <Pill color='info'>
                Saúde
              </Pill>
              <View style={{ height: 12 }} />
              <Pill color='warning'>
                Em processamento
              </Pill>
            </>
          )}
        </View>
      </ScrollView>
      <View style={{ ...styles.view, ...styles.border }}>
        <Text>Selecione um componente:</Text>
        <FlatList
          data={components}
          style={{ marginVertical: 10, width: '100%' }}
          keyExtractor={(item) => item}
          renderItem={(props) => (
            <Pressable onPress={() => setComponent(props.item)}>
              <Text style={{ margin: 5 }}>
                {component === props.item ? `[✓] ${props.item}` : props.item}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  border: {
    minHeight: 200,
    borderColor: 'black',
    borderTopWidth: 1
  }
});
