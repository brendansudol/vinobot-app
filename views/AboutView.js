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
        <Text style={styles.bigText}>
          FILL IN
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F44336',
  },
  bigText: {
    padding: 20,
    fontSize: 36,
    color: '#fff',
    textAlign: 'left',
  },
});

export default AboutView
