'use strict';
import React, {
  ActionSheetIOS,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Speech from 'react-native-speech';
import Icon from 'react-native-vector-icons/EvilIcons';

var SAMPLE = [
  'Dark and mysterious but big and plump. Resembles a seedless watermelon.',
  'Clean and morally superior. Spews salt and brackish pineapple.'
];

class Vinobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: SAMPLE[0],
    };
  }

  onSpeakPress() {
    Speech.speak({
      text: this.state.note,
      voice: 'en-US'
    });
  }

  onBtnPress() {
    this.setState({ note: SAMPLE[1] });
  }

  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://www.brendansudol.com',
      message: this.state.note,
      subject: 'a subject to go in the email heading'
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      console.log(text);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.bigText}>
            {this.state.note}
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.btn}
            onPress={this.onSpeakPress.bind(this)}>
            <Icon style={styles.btnInner} name="play" size={40} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn}
            onPress={this.showShareActionSheet.bind(this)}>
            <Icon style={styles.btnInner} name="share-apple" size={40} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn}
            onPress={this.onBtnPress.bind(this)}>
            <Icon style={styles.btnInner} name="refresh" size={40} />
          </TouchableHighlight>
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
    paddingTop: 30, 
    backgroundColor: '#FF3366',
  },
  bigText: {
    margin: 10,
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    padding: 20,
  },
  btnInner: {
    color: '#fff',
    alignSelf: 'center',
  },
  btnLeft: {
    alignSelf: 'flex-start',
  },
  btnRight: {
    alignSelf: 'flex-end',
  },
});

AppRegistry.registerComponent('Vinobot', () => Vinobot);
