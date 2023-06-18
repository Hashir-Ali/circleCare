
import React, {useState} from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';
import { ButtonGroup, SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

const Discover = ({navigation})=>{
    const [search, changeSearch] = useState();
    const [selectedIndex, changeSelctedIndex] = useState(1);
    const buttons = ['Read', 'Watch'];
  
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
                        {/* <Image source={require('../../assets/logo_white.png')} style={styles.whiteLogo}/> */}
                        <View style={{flex: 2, paddingLeft: 5, paddingTop: 10}}>
                            <Text style={{color: '#FFFFFF', fontSize: 24, lineHeight: 23, fontWeight: 'bold'}}>Discover</Text>
                        </View>

                        <Image style={{marginTop: 15}} source={require('../../assets/bell_white.png')}/>
                    </View>
                    {/* <Text>Sign In</Text> */}
                </ImageBackground>
                
            <View style={styles.mainBtnsContainer}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={{justifyContent: 'flex-start', marginTop: 2}}>
                            <SearchBar
                                platform='ios'
                                searchIcon={<Icon name='search' size={20} color='gray'/>}
                                onChangeText={changeSearch}
                                value={search}
                                lightTheme={true}
                                placeholder={'Search'}
                                round={true}
                                showCancel={true}
                                editable={true}
                                containerStyle={{backgroundColor: '#FFFFFF', bordorTop: 0, borderTopColor: '#FFFFFF', borderBottomColor: '#FFFFFF'}}
                                inputContainerStyle={styles.loginInput}
                            />
                            {/* <Icon name='facebook' size={30} color='black'/> */}
                        </View>

                        <ButtonGroup
                            onPress={value=> changeSelctedIndex(value)}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{height: 40, borderWidth: 1, borderRadius: 20, marginBottom: 16}}
                            buttonStyle={{borderRadius: 20}}
                            buttonContainerStyle={{backgroundColor: 'rgba(246, 246, 246, 1)', borderRightWidth: 0, color: '#f3f3f3'}}
                            selectedButtonStyle={{backgroundColor: 'white'}}
                            selectedTextStyle={{ color: "#0C212C" }}
                            textStyle={{color: '#576B74'}}
                        />
                        
                        

                        {selectedIndex == 1? (
                            
                        <Pressable onPress={()=>{
                            navigation.navigate('readArticle', {type: 'Watch'});
                        }} style={{display:'flex', flexDirection: 'row', borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 16, paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingEnd: 10, marginBottom: 12, shadowOffset: {width: 100, height: 100}, shadowColor: 'rgba(0, 0, 0, 0.05)', shadowOpacity: 0.1,}}>
                            <View style={{flex: 2}}>
                                <Image width={115} source={require('../../assets/video_article_img.png')} />
                            </View>
                            <View style={{flex: 3, paddingLeft: 8}}>
                                <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', lineHeight: 14}}>Video</Text>
                                <Text style={{color: '#4E4E4E', fontFamily: 'Satoshi Variable', fontWeight: 900, fontSize: 16, lineHeight: 16, textTransform: 'uppercase', marginTop: 5, marginBottom: 5}}>How To Treat Cancer</Text>
                                <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 400, fontSize: 13, lineHeight: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
                            </View>
                        </Pressable>
                        ) : (
                        <>
                            <View style={{display:'flex', flexDirection: 'row', borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 16, paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingEnd: 10, marginBottom: 12, shadowOffset: {width: 100, height: 100}, shadowColor: 'rgba(0, 0, 0, 0.05)', shadowOpacity: 0.1,}}>
                                <View style={{flex: 2}}>
                                    <Image width={115} source={require('../../assets/article_0_img.png')} />
                                </View>
                                <View style={{flex: 3, paddingLeft: 8}}>
                                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', lineHeight: 14}}>Article</Text>
                                    <Text style={{color: '#4E4E4E', fontFamily: 'Satoshi Variable', fontWeight: 900, fontSize: 16, lineHeight: 16, textTransform: 'uppercase', marginTop: 5, marginBottom: 5}}>How To Treat Cancer</Text>
                                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 400, fontSize: 13, lineHeight: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
                                </View>
                            </View>
                            <View style={{display:'flex', flexDirection: 'row', borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 16, paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingEnd: 10, marginBottom: 12, shadowOffset: {width: 100, height: 100}, shadowColor: 'rgba(0, 0, 0, 0.05)', shadowOpacity: 0.1,}}>
                                <View style={{flex: 2}}>
                                    <Image width={115} source={require('../../assets/article_1_img.png')} />
                                </View>
                                <View style={{flex: 3, paddingLeft: 8}}>
                                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', lineHeight: 14}}>Video</Text>
                                    <Text style={{color: '#4E4E4E', fontFamily: 'Satoshi Variable', fontWeight: 900, fontSize: 16, lineHeight: 16, textTransform: 'uppercase', marginTop: 5, marginBottom: 5}}>How To Treat Cancer</Text>
                                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 400, fontSize: 13, lineHeight: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
                                </View>
                            </View>
                            <View style={{display:'flex', flexDirection: 'row', borderWidth: 1, borderColor: '#F1F1F1', borderRadius: 16, paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingEnd: 10, marginBottom: 12, shadowOffset: {width: 100, height: 100}, shadowColor: 'rgba(0, 0, 0, 0.05)', shadowOpacity: 0.1,}}>
                                <View style={{flex: 2}}>
                                    <Image width={115} source={require('../../assets/article_2_img.png')} />
                                </View>
                                <View style={{flex: 3, paddingLeft: 8}}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <Text style={{ flex: 2, color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', lineHeight: 14}}>Article</Text>
                                        <View style={{ flex: 1, marginEnd: 15}}>
                                            <View style={{display: 'flex', flexDirection: 'row',backgroundColor: '#EBFFD8', width: 72,  paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 15,}}>
                                                <Image source={require('../../assets/article_check.png')}/>
                                                <Text style={{textAlign: 'center', paddingLeft: 5}}>Done</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{color: '#4E4E4E', fontFamily: 'Satoshi Variable', fontWeight: 900, fontSize: 16, lineHeight: 16, textTransform: 'uppercase', marginTop: 5, marginBottom: 5}}>How To Treat Cancer</Text>
                                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 400, fontSize: 13, lineHeight: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
                                </View>
                            </View>
                        </>
                        )}
                    </ScrollView>
                </SafeAreaView>
            </View>
        {/* <FooterNav /> */}
        </View>
    );
}

export default Discover;

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