
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';


const Home = ({navigation})=>{


    return (
        <View style={styles.Container}>
            <StatusBar
                animated={true}
                backgroundColor="#c38ad1"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />
                <ImageBackground source={require( '../../assets/home_bg.png')} resizeMode="cover" style={styles.topBar}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 20, paddingRight: 20, paddingTop: 25}}>
                        <Image source={require('../../assets/logo_white.png')} style={styles.whiteLogo}/>
                        <View style={{flex: 2, paddingLeft: 5, paddingTop: 10}}>
                            <Text style={{color: '#F6BBFF', fontSize: 15, textAlign: 'left', lineHeight: 15}}>Welcome Back,</Text>
                            <Text style={{color: '#FFFFFF', fontSize: 24, lineHeight: 23, fontWeight: 'bold'}}>John Smith</Text>
                        </View>

                        <Image style={{marginTop: 15}} source={require('../../assets/bell_white.png')}/>
                    </View>
                    {/* <Text>Sign In</Text> */}
                </ImageBackground>
                
            <View style={styles.mainBtnsContainer}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={{justifyContent: 'flex-start', marginTop: 120}}>
                            <Pressable style={styles.mainBtns}>
                                <ImageBackground source={require('../../assets/home_btns_bg_1.png')} resizeMode='cover' style={styles.mainBtnsBG}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Image source={require('../../assets/health_survey.png')}/>
                                        <Text style={styles.mainBtnsTxt}>My Health Survey</Text>
                                    </View>
                                    
                                </ImageBackground>
                            </Pressable>

                            <Pressable style={styles.mainBtns} onPress={()=>{
                            navigation.navigate('Daily Tasks');
                        }}>
                                <ImageBackground source={require('../../assets/home_btns_bg_1.png')} resizeMode='cover' style={styles.mainBtnsBG}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Image source={require('../../assets/today_engagement.png')} style={{marginLeft: 5}}/>
                                        <Text style={[styles.mainBtnsTxt, {marginLeft: 10}]}>Today Engagement</Text>
                                    </View>
                                </ImageBackground>
                            </Pressable>

                            <Pressable style={styles.mainBtns} onPress={()=>{
                            navigation.navigate('recordAndProgress');
                        }}>
                                <ImageBackground source={require('../../assets/home_btns_bg_1.png')} resizeMode='cover' style={styles.mainBtnsBG}>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Image source={require('../../assets/kanban.png')}/>
                                        <Text style={styles.mainBtnsTxt}>My Records & Progress</Text>
                                    </View>
                                </ImageBackground>
                            </Pressable>

                            
                            <Pressable style={styles.pressable} onPress={() =>
                                navigation.navigate('Daily Reflections', {name: ' '})
                            }>
                                <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                                    <Text style={styles.pressable.text}>My Daily Reflection</Text>
                                </ImageBackground>
                            </Pressable>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        {/* <FooterNav /> */}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    topBar: {
        flex: 1,
    },

    whiteLogo: {
        // minWidth: 50,
        // minHeight: 60,
    },

    mainBtnsContainer: {
        flex: 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // borderRadius: 30,
        padding: 10,
        marginTop: -80,

    },

    mainBtns: {
        marginTop: -95,
        height: 220,
        // padding: 10,
        textAlign: 'center',
        marginBottom: 25,
    },

    mainBtnsBG: {
        padding: 35,
        heign: 100,
        textAlign: 'center',
    },

    mainBtnsTxt: {
        width: 170,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 0.6,
        textAlign: 'left',
        textTransform: 'uppercase',
        color: '#611088',
        paddingLeft: 25,
    },

    pressable: {
        // flex: 1,
        // justifyContent: 'center',
        // textAlign: 'center',
        width: '100%',
        marginTop: -80,
        // marginLeft: 'auto',
        // marginRight: 'auto',
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