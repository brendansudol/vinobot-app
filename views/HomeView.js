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

import generateNote from '../util/generator.js';
import randomColor from '../util/colors.js';
import shadeColor from '../util/shade.js';


class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      color: '#f93c40',
    };
  }

  componentDidMount() {
    this.setState({note: generateNote()});
  }

  onSpeakPress() {
    Speech.speak({
      text: this.state.note,
      voice: 'en-US'
    });
  }

  onBtnPress() {
    this.setState({
      note: generateNote(),
      color: randomColor(),
    });
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

  render({note, color} = this.state) {
    const colorDark = shadeColor(color, -20);

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
          borderTopColor: colorDark
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
    paddingTop: 10,
    backgroundColor: '#f93c40',
  },
  bigText: {
    marginTop: 0,
    padding: 20,
    fontSize: 44,
    color: '#fff',
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f93c40',
    borderTopWidth: 1,
    borderTopColor: '#fff',
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
