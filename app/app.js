import React from 'react';
import { Platform, Navigator, StyleSheet, Alert, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const fbColor = '#3a569a';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigator}>
          <TouchableHighlight>
            <Icon name='menu' size={20} color={fbColor}/>
          </TouchableHighlight>
          <Text style={styles.navTitle}>Facebook</Text>
          <Image source={require('./res/pic.png')} style={styles.navPic}/>
        </View>
        
        <View style={styles.content}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('./res/fb.png')} style={styles.fbLogo}/>
            <Text style={styles.message}>Connect with friends and the world around you on Facebook.</Text>
          </View>
          <Image source={Platform.OS == 'ios' ? require('./res/ios.jpg') : require('./res/android.jpg')} style={styles.preview} resizeMode='contain'/>
        </View>
        
        <View style={styles.footer}>
          <TouchableHighlight onPress={this.more} underlayColor='#fff' style={styles.button}><Text style={styles.btnText}>KNOW MORE</Text></TouchableHighlight>
          <TouchableHighlight onPress={this.download} underlayColor='#fff' style={styles.button}><Text style={styles.btnText}>DOWNLOAD</Text></TouchableHighlight>
        </View>
      </View>
    );
  }

  more() {
    Alert.alert( 'Know more' );
  }

  download() {
    Alert.alert( 'Thanks for download' );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  navigator: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  navTitle: {
    color: fbColor,
    fontSize: 18,
    fontWeight: 'bold'
  },
  navPic: {
    borderRadius: 25,
    height: 40,
    width: 40
  },
  content: {
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  fbLogo: {
    height: 35,
    marginBottom: 30,
    width: 35
  },
  message: {
    color: fbColor,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  preview: {
    height: 320
  },
  footer: {
    backgroundColor: '#39569a',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    borderRadius: 5,
    padding: 7,
    borderColor: 'white',
    borderWidth: 2
  },
  btnText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold'
  }
});