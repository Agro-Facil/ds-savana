import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Webhook from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Components',
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-web-component" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="hooks"
        options={{
          title: 'Hooks',
          tabBarIcon: ({ color }) => (
            <Webhook name="webhook" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
