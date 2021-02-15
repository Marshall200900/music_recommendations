import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Content} from 'native-base';
import AppFooter from './components/app_footer';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const App = () => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Text>Hello my dearrrrrest friend@!!!!</Text>
        </View>
      </Content>
      <AppFooter/>
    </Container>
  )
}

export default App;
