'use strict';

import React, {
  ActionSheetIOS,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Speech from 'react-native-speech';
import Icon from 'react-native-vector-icons/EvilIcons';

import { colors, shade } from '../util/colors.js';
import { sample } from '../util/helpers.js';
import wineNote from '../util/wine-note.js';


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      color: '#F44336',
    };
  }

  componentDidMount() {
    this.setState({note: wineNote()});
  }

  onSpeakPress() {
    Speech.speak({
      text: this.state.note,
      voice: 'en-US'
    })
    .catch(error => {
      console.log(error);
    });
  }

  onBtnPress() {
    let oldColor = this.state.color,
        newColor = sample(colors, oldColor); 

    this.setState({
      note: wineNote(),
      color: newColor,
    });
  }

  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://vinobot.co',
      message: this.state.note,
      subject: 'Wine tasting notes, courtesy of Vinobot'
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

  render({note, color} = this.state) {
    return (
      <View style={styles.container}>
        <ScrollView style={[styles.body, {
          backgroundColor: color
        }]}>
          <Text style={styles.bigText}>
            {note}
          </Text>
        </ScrollView>
        <View style={[styles.footer, {
          backgroundColor: color,
          borderTopColor: shade(color, 10)
        }]}>
          <TouchableHighlight
            style={styles.btn}
            underlayColor={null}
            onPress={this.onSpeakPress.bind(this)}>
            <Icon style={styles.btnInner} name="play" size={40} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btn}
            underlayColor={null}
            onPress={this.showShareActionSheet.bind(this)}>
            <Icon style={styles.btnInner} name="share-apple" size={40} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btn}
            underlayColor={null}
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
  },
  bigText: {
    marginTop: 0,
    padding: 20,
    fontSize: 36,
    color: '#fff',
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
  },
  btn: {
    flex: 1,
    padding: 20,
  },
  btnInner: {
    color: '#fff',
    alignSelf: 'center',
  },
});

export default HomeView
