import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Button, ButtonText, Card } from '../../components/index'

export default function TabTwoScreen() {
  const [component, setComponent] = useState('Button')

  return (
    <>
      <View style={styles.view}>
        {component === 'Button' && (
          <Button>
            <ButtonText>
              teste
            </ButtonText>
          </Button>
        )}
        {component === 'Card' && (
          <Card />
        )}
      </View>
      <View style={{ ...styles.view, ...styles.border }}>
        <Text>Selecione um componente:</Text>
        <Pressable onPress={() => setComponent('Button')}>
          <Text>
            {component === 'Button' ? '[✓] Button' : 'Button'}
          </Text>
        </Pressable>
        <Pressable onPress={() => setComponent('Card')}>
          <Text>
            {component === 'Card' ? '[✓] Card' : 'Card'}
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  border: {
    borderColor: 'black',
    borderTopWidth: 1
  }
});
