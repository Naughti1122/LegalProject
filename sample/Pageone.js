import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, MailComposer } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="mail"
          onPress={() => {
            // algo
            MailComposer.composeAsync({
              recipients: 
              ['lfavre3@gmail.com'],
              subject: 'reunion con pablo',
              body: 'hola',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
