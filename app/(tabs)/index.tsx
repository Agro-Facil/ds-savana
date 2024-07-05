import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Button, Card, TextField, Checkbox, Link, Divider, VStack, HStack } from '../../src/index'
import { ArrowLeft, ChevronLeft, HomeIcon } from 'lucide-react-native';

export default function TabTwoScreen() {
  const components = [
    'Button',
    'Card',
    'TextField',
    'Checkbox',
    'Link',
    'Divider',
    'VStack',
    'HStack'
  ]
  const [component, setComponent] = useState('Button')

  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          {component === 'Button' && (
            <>
              <Button size='xxs' icons={[<ChevronLeft color='white' />]} />
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
            <Card />
          )}
          {component === 'TextField' && (
            <>
              <TextField label='Nome' type='password' placeholder='teste' />
              <TextField label='Nome' placeholder='teste' />
              <TextField label='Nome' isDisabled placeholder='teste' />
              <TextField label='Nome' isInvalid placeholder='teste' hint='Erro ao logar' />
              <TextField label='Nome' placeholder='teste' hint='teste' />
            </>
          )}
          {component === 'Checkbox' && (
            <>
              <Checkbox defaultIsChecked={true} />
              <View style={{ height: 12 }} />
              <Checkbox label='teste' />
              <View style={{ height: 12 }} />
              <Checkbox label='teste' isDisabled hint='teste' />
              <View style={{ height: 12 }} />
              <Checkbox label='teste' isInvalid hint='required' />
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
        </View>
      </ScrollView>
      <View style={{ ...styles.view, ...styles.border }}>
        <Text>Selecione um componente:</Text>
        <FlatList
          data={components}
          keyExtractor={(item) => item}
          renderItem={(props) => (
            <Pressable onPress={() => setComponent(props.item)}>
              <Text>
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
