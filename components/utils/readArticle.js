import React from 'react';
import {View, StyleSheet, StatusBar, Pressable, Image, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ReadArticle = ({route, navigation})=>{
    const { type, otherParam } = route.params;
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
                <View style={{flex: 8}}>
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>{type}</Text>
                </View>
            </View>
            {/* Top Bar End */}
            <SafeAreaView style={styles.loginView}>
                <ScrollView>
                    <View style={{paddingBottom: 5}}>
                        <Text style={{textTransform: 'uppercase', fontFamily: 'Satoshi Variable', fontSize: 24, fontWeight: 900, lineHeight: 32, marginBottom: 15}}>How To Treat Cancer</Text>
                        <Image source={require('../../assets/article_big_img.png')} style={{width: '100%', borderRadius: 10, marginBottom: 15}}/>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
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

});
export default ReadArticle;