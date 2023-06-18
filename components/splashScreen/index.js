import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import styles from './splash-styles';

const SplashScreen = ({navigation})=>{
    
const image = {uri: '../../assets/Buttons.png'};    

    return (
        <View style={styles.container}>
            <Image style={styles.topLogo} source={require('../../assets/logo.png')}/>

            <Pressable style={styles.pressable} onPress={() =>
                navigation.navigate('Tutorial', {name: ' '})
            }>
                <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                    <Text style={styles.pressable.text}>Get Started</Text>
                </ImageBackground>
            </Pressable>

            <Text style={styles.footer}>Powered By <Text style={styles.footer.darkA}>NTAM Group</Text></Text>
        </View>
        
    );
}


export default SplashScreen;