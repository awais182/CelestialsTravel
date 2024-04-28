import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FancyCardsTwo from './components/FancyCardsTwo';
import FancyCardsThree from './components/FancyCardsThree';

const App = () => {
  return (
    <View style={[styles.background, styles.backgroundcolour]}>
      <SafeAreaView>
        <View>
          <ScrollView>
            <FlatCards />
            <ElevatedCards />
            <FancyCards />
            <FancyCardsTwo />
            <FancyCardsThree />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundcolour: {
    backgroundColor: 'white',
  },
});
export default App;
