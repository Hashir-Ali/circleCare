import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';

const Relax = ({navigation})=>{


    return (
        <View style={styles.container}>
             <StatusBar
                animated={true}
                backgroundColor="#CBC3EB"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />
            <View style={{ backgroundColor: '#CBC3EB', height: '50%', width: '100%'}}>
                <Text style={{fontSize: 18, fontWeight: '600', lineHeight: 20, color: '#8853A7', textAlign: 'center', paddingTop: '3%', marginBottom: '3%'}}>Meditate</Text>
                <Image source={require('../../assets/kalyana.png')} style={{marginLeft: "auto", marginRight: "auto", marginTop: '2%'}}/>
            </View>
            <View style={{height: '50%', paddingTop: 125}}>
                <Text style={{textAlign: 'center', fontSize: 32, fontWeight: '600', color: '#8853A7'}}>Meet Kalyana</Text>

                <Pressable style={styles.pressable} onPress={() =>navigation.navigate('Home', {name: ' '})}>

                    <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                        <Text style={styles.pressable.text}>Start The Journey</Text>
                    </ImageBackground>

                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    pressable: {
        // flex: 1,
        // justifyContent: 'center',
        // textAlign: 'center',
        width: '90%',
       paddingTop: 17,
        marginLeft: 'auto',
        marginRight: 'auto',
        image: {
            minWidth: 250,
        },
        text: {
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            paddingTop: '3%',
            paddingBottom: '3%',
        },
    },
});

export default Relax;