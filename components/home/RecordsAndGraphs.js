import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RadioButton} from 'react-native-paper';

const data = [50, 10, 40, 95, 85, 65, 75, 55, 70, 80, 30, 45];

const RecordsAndGraphs = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  // for button groups.
  const [selectedIndex, changeSelectedIndex] = useState(0);
  const buttons = ['My Records', 'Show Report'];

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={false}
      />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.backButtonContainer}>
          <Pressable onPress={() => navigation.navigate('Home', {name: ' '})}>
            <Image source={require('../../assets/back_icon.png')} />
          </Pressable>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Record And Progress</Text>
        </View>
      </View>
      {/* Top Bar End */}

      {/* Profile Fields Start */}
      <View style={styles.loginView}>
        <ButtonGroup
          onPress={changeSelectedIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButton}
          buttonContainerStyle={styles.buttonGroupButtonContainer}
          selectedButtonStyle={styles.buttonGroupSelectedButton}
          selectedTextStyle={styles.buttonGroupSelectedText}
          textStyle={styles.buttonGroupText}
        />

        {selectedIndex === 0 ? (
          <>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.saveButtonContainer}>
                {/* top text of graph */}
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'gray', fontWeight: 'bold'}}>
                    Pain Chart
                  </Text>
                  <Text
                    style={{
                      color: 'purple',
                      marginLeft: 'auto',
                      fontWeight: 'bold',
                    }}>
                    BP
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      marginLeft: 'auto',
                      fontWeight: 'bold',
                    }}>
                    SL
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      marginLeft: 'auto',
                      fontWeight: 'bold',
                    }}>
                    SH
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      marginLeft: 'auto',
                      fontWeight: 'bold',
                    }}>
                    Weight
                  </Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Text style={{color: 'gray'}}> 12/12/2020</Text>
                  <AntDesign
                    style={{color: 'gray', marginLeft: 'auto'}}
                    name="calendar"
                    size={20}
                    color="gray"
                  />
                </View>
                <View style={{flex: 1, fontWeight: 'bold'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    First Graph
                  </Text>
                  <AreaChart
                    style={{height: 200}}
                    data={data}
                    contentInset={{top: 30, bottom: 30}}
                    curve={shape.curveNatural}
                    svg={{fill: '#8853A7'}}>
                    <Grid />
                  </AreaChart>
                </View>
                <View style={{flex: 2, marginTop: 2}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 8,
                      color: 'red',
                    }}>
                    Second Graph
                  </Text>

                  <AreaChart
                    style={{height: 250}}
                    data={data}
                    contentInset={{top: 30, bottom: 30}}
                    curve={shape.curveNatural}
                    svg={{fill: '#F469AC'}}>
                    <Grid />
                  </AreaChart>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginVertical: 140}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>Mon</Text>

                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Tue
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Wed
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Thu
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Fri
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Sat
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    marginLeft: 'auto',
                    fontWeight: 'bold',
                  }}>
                  Sun
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <RadioButton
                  color="red"
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text style={{color: 'red', fontWeight: 'bold'}}>Diastole</Text>
                <RadioButton
                  color="red"
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text style={{color: 'red', fontWeight: 'bold'}}> Systole</Text>
              </View>
            </View>

            {/* <Text style={{color: 'gray'}}> 12/12/2020</Text> */}
            <Pressable style={styles.saveButton}>
              <ImageBackground
                source={require('../../assets/Buttons.png')}
                resizeMode="cover"
                style={styles.saveButtonImage}>
                <Text style={styles.saveButtonText}>Save</Text>
              </ImageBackground>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={{color: 'red'}}>Helloo</Text>
          </>
        )}
      </View>
      {/* Profile Fields end */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  backButtonContainer: {
    flex: 3,
    paddingLeft: 20,
  },
  titleContainer: {
    flex: 10,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '600',
    color: '#8853A7',
    lineHeight: 20,
  },
  loginView: {
    flex: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
  },
  buttonGroupContainer: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
  },
  buttonGroupButton: {
    borderRadius: 20,
  },
  buttonGroupButtonContainer: {
    backgroundColor: 'rgba(246, 246, 246, 1)',
    borderRightWidth: 0,
    color: '#f3f3f3',
  },
  buttonGroupSelectedButton: {
    backgroundColor: 'white',
  },
  buttonGroupSelectedText: {
    color: '#0C212C',
  },
  buttonGroupText: {
    color: '#576B74',
  },
  saveButtonContainer: {
    marginTop: 16,
  },
  saveButton: {
    textAlign: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  saveButtonImage: {
    minWidth: 250,
  },
  saveButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
});

export default RecordsAndGraphs;
