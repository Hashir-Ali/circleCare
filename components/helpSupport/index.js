import React,{useState} from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const HelpSupport = ({navigation})=>{

    const [messageText, changeMessageText] = useState('Hi, I need some help with...');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <View style={{flex: 2,display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: 'white'}}>
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
                <View style={{flex: 8}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Support</Text>
                </View>
            </View>
            {/* Top Bar End */}

            {/* Content Section */}
            <View style={style.loginView}>
                <Text style={{marginTop: 10, marginBottom: 20, color: '#576B74', fontSize: 13, fontWeight: 500, lineHeight: 18, alignSelf: 'stretch'}}>Tell us as much as you can about the problem, and we’ll make sure to get you to the right person.</Text>
                
                <View>
                    <Text style={{color: '#8853A7', fontFamily: 'General Sans Variable', fontSize: 20, fontWeight: 500, lineHeight: 25}}>Message</Text>
                    <TextInput style={style.loginInput}
                        multiline
                        numberOfLines={14}
                        maxLength={40}
                       value={messageText}
                       onChange={value=>changeMessageText(value)}
                    />
                </View>
            </View>
            {/* Content Section End */}
            <View style={{flex: 10, paddingLeft: 10, paddingRight: 10, justifyContent: 'center'}}>
               <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 80,}}> 
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /> 
                    <View style={{paddingRight: 60}}>
                        <Text style={{color: 'rgba(4, 4, 4, 0.5)', fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 18, textDecorationLine: 'underline', marginTop: 5}}>Disclaimer Terms</Text>
                        <Text style={{color: 'rgba(4, 4, 4, 0.5)', fontFamily: 'Poppins', fontSize: 11, fontWeight: 400, lineHeight: 16, marginTop: 5}}>By submitting this form, you acknowledge and understand the limitations and conditions mentioned above. Thank you for your cooperation.</Text>
                    </View>
                </View>
                <Pressable style={style.pressable}>
                    <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={style.pressable.image}>
                        <Text style={style.pressable.text}>Send</Text>
                    </ImageBackground>
                </Pressable>
            </View>
            
            
        </View>
    );
}

const style = StyleSheet.create({
    loginView: {
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
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
        textAlign: 'center',
        width: '90%',
        top: 20,
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
export default HelpSupport;