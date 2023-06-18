
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View,  ImageBackground } from 'react-native';
import styles from './tutorial-styles';

const MyTutorial = ({navigation})=>{
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollerView}>
              <Image style={styles.topLogo} source={require('../../assets/logo.png')}/>
    
              <View style={styles.textContainer}>
                  <Text>
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Image style={styles.containerImage} source={require('../../assets/tutorialImage1.png')}/>
              </View>
              <View style={styles.textContainer}>
                  <Text>
                  2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Image style={styles.containerImage} source={require('../../assets/tutorialImage2.png')}/>
              </View>
              <View style={styles.textContainer}>
                  <Text>
                  3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <Image style={styles.containerImage} source={require('../../assets/tutorialImage3.png')}/>
              </View>

              
              <View style={[styles.textContainer, styles.MainButton]}>
              <Pressable style={styles.pressable} onPress={() =>
                navigation.navigate('Login', {name: ' '})
            }>
                <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                    <Text style={styles.pressable.text}>Done</Text>
                </ImageBackground>
            </Pressable>
              
             </View>
             
          </ScrollView>
        </SafeAreaView>
    );
}

export default MyTutorial;