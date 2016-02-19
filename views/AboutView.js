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
          Vinobot is a slightly tipsy little robot that 
          generates ridiculous wine tasting notes.
        </Text>
        <Text style={[styles.text, {fontSize: 22}]}>
          Has a waiter ever poured you a glass of wine and then waited 
          for your impressions? Well, now you'll be ready. 
          And if you'd like, Vinobot can read the note aloud for you.*
        </Text>
        <Text style={[styles.text, {fontSize: 12}]}>
          * Make sure your phone is not on "silent mode"
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
    marginBottom: 30,
    color: '#fff',
    textAlign: 'left',
  }
});

export default AboutView
