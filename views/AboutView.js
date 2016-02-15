'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AboutView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.bigText}>
            FILL IN
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: '#f93c40',
  },
  bigText: {
    marginTop: 0,
    padding: 10,
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AboutView
