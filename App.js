import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  render(){
    return(
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View>
            <Button>
              <Text>
                Hello World
              </Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
    )
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});


