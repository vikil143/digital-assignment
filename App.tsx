// import MainStackNavigator from '@myapp/routes/MainStackNavigator';
import MainStackNavigator from '@myapp/routes/MainStackNavigator';
import { StyleSheet, View } from 'react-native';
import React from "react"
import ToastWrapper from '@myapp/context/Toast';

export default function App() {
  return (
    <View style={styles.container}>
      <ToastWrapper>
        <MainStackNavigator />
      </ToastWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
