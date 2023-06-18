import React, {useState} from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './login-styles';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';

import axios from 'axios';

GoogleSignin.configure({
    scopes: [
        'https://www.googleapis.com/auth/user.gender.read',
        'https://www.googleapis.com/auth/profile.agerange.read',
        'https://www.googleapis.com/auth/userinfo.profile',
         'email', 'profile',
    ], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '735656807504-rea5ks2c4odq51d2fknbalnqnth17hfs.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

const Login = ({navigation})=>{
    const [userState, setUserState ] = useState({
        user: {
          id: '',
          name: '',
          email: '',
          photo: '',
          familyName: '',
          givenName: '',
        },
        scopes: '',
        idToken: '',
       
        serverAuthCode: '',
      });
    // Somewhere in your code
    signIn = async () => {
        try {

            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();
            setUserState(userInfo);
            console.log(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log('error occured', error.code);
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log('error occured', error.code);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log('error occured', error.code);
            } else {
            // some other error happened
            console.log('something else happened..', error.code );
            }
        }
    };




    // const handleFacebookLogin = async () => {
    //     try {
    //         LoginManager.
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    //     if (result.isCancelled) {
    //         console.log('Facebook login canceled');
    //     } else {
    //         const tokenData = await AccessToken.getCurrentAccessToken();
    //         console.log('Facebook access token:', tokenData.accessToken);
    //         // You can now use the access token to authenticate with your backend or perform other actions
    //     }
    //     } catch (error) {
    //     console.log('Error logging in with Facebook:', error);
    //     }
    // };

 

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.ScrollView}>
                <Image style={styles.topLogo} source={require('../../assets/logo-small.png')}/>
                <Text style={styles.loginText}>Log in</Text>

                <View style={styles.loginView}>
                    <TextInput
                        editable
                        maxLength={40}
                        style={styles.loginInput}
                        placeholder={'Email'}
                        textContentType={'emailAddress'}
                        autoComplete={'email'}
                        inputMode={'email'}
                    />
                    <TextInput
                        editable
                        secureTextEntry={true}
                        maxLength={40}
                        style={styles.loginInput}
                        placeholder={'Password'}
                    
                    />
                    <Text style={styles.forgotPassText} onPress={() =>
                        navigation.navigate('Forgot Password', {name: ' '})
                    }>Forgot Password</Text>
                </View>

                <View style={styles.fieldSet}>
                    <Text style={styles.legend}>or sign in using</Text>
                </View>
                {/* <Text style={{color: 'black'}}>haha: {userState.user.id}</Text> */}
                {/* <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('Facebook login error:', error);
          } else if (result.isCancelled) {
            console.log('Facebook login canceled');
          } else {
            handleFacebookLogin();
          }
        }}
        onLogoutFinished={() => {
          console.log('Facebook logout finished');
        }}
      /> */}
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 9, justifyContent: 'center'}}>
                     
                    <TouchableOpacity style={styles.button} onPress={()=>{this.signIn()}}>
                        <Image source={require('../../assets/google.png')} />
                    </TouchableOpacity>
                    
                    <Image source={require('../../assets/facebook.png')} />
                    <Image source={require('../../assets/icloud.png')} />
                </View>
                    
                <View style={{width: '100%', textAlign: 'center', justifyContent: 'center', justifyItems: 'center'}}>
                    <Pressable style={styles.pressable} onPress={() =>
                        navigation.navigate('Home', {name: ' '})
                    }>
                        <ImageBackground source={require( '../../assets/Buttons.png')} resizeMode="cover" style={styles.pressable.image}>
                            <Text style={styles.pressable.text}>Sign In</Text>
                        </ImageBackground>
                    </Pressable>
                    <View><Text style={{color: '#8B8B8B', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%'}}>Don't have an account? <Text style={{color: '#313131', fontWeight: 'bold'}} onPress={()=> navigation.navigate('Sign Up', {name: ' '})}>Sign Up</Text></Text></View>
                </View>
                
                <Text style={styles.footer}>Powered By <Text style={styles.footer.darkA}>NTAM Group</Text></Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;