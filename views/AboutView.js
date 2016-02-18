'use strict';

import React, {
  Component,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AboutView extends Component {
  render() {
    return (
      <ScrollView style={styles.body}>
        <Text style={[styles.text, {fontSize: 30}]}>
          Vinobot is a tipsy little robot that generates ridiculous 
          wine tasting notes.
        </Text>
        <Text style={[styles.text, {fontSize: 22}]}>
          Has a waiter ever poured you a glass of wine and then 
          waited to hear your thoughts about it? Now you'll be ready. 
          And Vinobot can even read the note aloud for you if you'd like.*
        </Text>
        <Text style={[styles.text, {fontSize: 14}]}>
          * Make sure your phone is not on "silent mode".
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    backgroundColor: '#3F51B5',
  },
  text: {
    marginBottom: 25,
    color: '#fff',
    textAlign: 'left',
  }
});

export default AboutView
