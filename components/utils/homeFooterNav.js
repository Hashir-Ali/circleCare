import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../home';
import Care from '../care';
import Discover from '../discover';
import Relax from '../relax';
import Profile from '../profile';



const styles = StyleSheet.create({
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: 1,
    }
});


const Tab = createMaterialBottomTabNavigator();


const FooterNav = ()=>{

    const options = {
        style: { height: 36 },
        labelStyle: { fontSize: 30 }, 
        tabStyle: { marginTop: -100 },
        indicatorStyle: { borderTopColor: 'blue', borderTopWidth: 10 }
    }
    return (

    <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#BF6BBB' }}
        tabBarOptions={options}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => {
                return (
                <Image style={{ width: 30, height: 30}} source={require('../../assets/homeIco.png')} />
              )}
          }}
      />
      <Tab.Screen name="Care" component={Care} 
        options={{
            tabBarLabel: 'Care',
            tabBarIcon: () => {
                return (
                <Image style={{ width: 30, height: 30}} source={require('../../assets/careIco.png')} />
              )}
          }}
      />
      <Tab.Screen name="Discover" component={Discover}
        options={{
            tabBarLabel: 'Discover',
            tabBarIcon: () => {
                return (
                <Image style={{ width: 30, height: 30}} source={require('../../assets/discoverIco.png')} />
              )}
          }}
      />
      <Tab.Screen name="Relax" component={Relax} 
        options={{
            tabBarLabel: 'Relax',
            tabBarIcon: () => {
                return (
                <Image style={{ width: 30, height: 30}} source={require('../../assets/relaxIco.png')} />
            )}
        }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => {
            return (
            <Image style={{ width: 30, height: 30}} source={require('../../assets/profileIco.png')} />
          )},
        }}/> 
    </Tab.Navigator>
    );
}

export default FooterNav;