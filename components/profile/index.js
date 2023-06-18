import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar } from 'react-native';

const Profile = ({navigation})=>{


    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'default'}
                showHideTransition={'fade'}
                hidden={false}
            />

            <View style={styles.main}>
                <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20, paddingTop: 20}}>Profile</Text>

                <View style={styles.profileView}>
                    <View style={{marginTop: 15,}}>
                        <Text style={{color: '#15141F', fontSize: 28, lineHeight: 26, fontWeight: '600'}}>John Smith</Text>
                        <Text style={{color: '#576B74', fontSize: 13, lineHeight: 18, fontWeight: '500'}}>Personal Account</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/profile_pic.png')} />
                        <Image source={require('../../assets/camera_icon.png')} style={{position: 'absolute', right: 0, top: 40}}/>
                    </View>
                    
                </View>

                <View style={{display: 'flex', flexDirection: 'column', marginTop: 16}}>
                    <Text style={{color: '#0C212C', fontSize: 13, lineHeight: 18, fontWeight: 500}}>Profile</Text>
                    <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 16, paddingBottom: 8}}  onPress={() =>
                        navigation.navigate('Edit Profile', {name: ''})
                        }>
                        <Image source={require('../../assets/profile_icon.png')} />
                        <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Edit Profile</Text>
                    </Pressable>

                    <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 8, paddingBottom: 16}}  onPress={() =>
                        navigation.navigate('Change Password', {name: ''})
                        }>
                        <Image source={require('../../assets/change_pass_icon.png')} />
                        <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Change Password</Text>
                    </Pressable>
                    <View style={{paddingTop: 32}}>
                        <Text style={{color: '#0C212C', fontSize: 13, lineHeight: 18, fontWeight: 500}}>Support</Text>

                        <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 16, paddingBottom: 8}} onPress={() =>
                        navigation.navigate('Tutorial', {name: ' '})
                        }>
                            <Image source={require('../../assets/tutorial_icon.png')} />
                            <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Tutorial</Text>
                        </Pressable>

                        <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 8, paddingBottom: 8}}  onPress={() =>
                        navigation.navigate('Help And Support', {name: ' '})
                        }>
                            <Image source={require('../../assets/help_icon.png')} />
                            <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Help and Support</Text>
                        </Pressable>

                        <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 8, paddingBottom: 8}}>
                            <Image source={require('../../assets/logout_icon.png')} />
                            <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Log out</Text>
                        </Pressable>

                        <Pressable style={{display: 'flex', flexDirection: 'row', paddingTop: 8, paddingBottom: 16}}>
                            <Image source={require('../../assets/close_icon.png')} />
                            <Text style={{paddingTop: 10, paddingLeft: 10, color: '#0C212C', fontSize: 15, lineHeight: 20, fontWeight: 400}}>Close the account</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    profileView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingLeft: 20,
        // paddingRight: 20,
    },
    main: {
       height: '100%'
    }
});

export default Profile;