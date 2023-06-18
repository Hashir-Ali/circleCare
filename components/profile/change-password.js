import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';


const ChangePassword = ({navigation})=>{
    return (
        <View style={{flex: 2,display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white'}}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />
            {/* Top Bar */}
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10}}>
                <View style={{flex: 5, paddingLeft: 20}}>
                    <Pressable onPress={() =>
                        navigation.navigate('Home', {name: ' '})
                        }>
                        <Image source={require('../../assets/back_icon.png')} />
                    </Pressable>
                </View>
                <View style={{flex: 10}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Change Password</Text>
                </View>
            </View>
            {/* Top Bar End */}
            {/* Profile Fields Start */}
            <View style={styles.loginView}>

                <Text style={{marginTop: 10, marginBottom: 20, color: '#576B74', fontSize: 13, fontWeight: 500, lineHeight: 18, alignSelf: 'stretch'}}>Make a new password that's different from your old password</Text>

                <TextInput
                    editable
                    secureTextEntry={true}
                    maxLength={40}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.loginInput}
                    placeholder={'Old Password'}
                />
                <TextInput
                    editable
                    secureTextEntry={true}
                    maxLength={40}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.loginInput}
                    placeholder={'New Password'}
                />

                <TextInput
                    editable
                    secureTextEntry={true}
                    maxLength={40}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    style={styles.loginInput}
                    placeholder={'Confirm New Password'}
                />
                <Pressable>
                    <Text style={{textAlign: 'center', textDecorationLine: 'underline', color: '#8EB26F', fontFamily: 'General Sans Variable' ,fontSize: 13, lineHeight: 18, fontWeight: 500, }}>Forgot Password</Text>
                </Pressable>
            </View>
                
            <Pressable style={styles.pressable}>
                <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                    <Text style={styles.pressable.text}>Change Password</Text>
                </ImageBackground>
            </Pressable>
            {/* Profile Fields end */}
        </View>
    );
}


const styles =  StyleSheet.create({
    loginView: {
        flex: 5,
        width: '90%',
        textAlign: 'center',
        // justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        border: '1px solid black',
        sideLines: {
            
            textAlign: 'center',
        },
        text:{
            flex: 1,
        },
        loginButtons: {
           width: '100%',
           textAlign: 'center',
           flex: 1,
           flexDirection: 'row',
        }
    },
    loginInput: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E7EAEB',

    },
    pressable: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%',
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

export default ChangePassword;