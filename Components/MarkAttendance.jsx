import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function MarkAttendance() {
    const route = useRoute();
  const { latitude, longitude } = route.params;
  return (
    <>
    <View>
        <Text>Mark your attendance</Text>
        <Text>Latitude: {latitude}</Text>
        <Text>Longitude: {longitude}</Text>
      </View>
    </>
  );
}
