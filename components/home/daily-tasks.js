import React, {useState} from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { ButtonGroup} from 'react-native-elements';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Feather';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      title: 'Fifth Item',
    },
  ];

  const DATAB = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img: '../../assets/video_play.png',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: '../../assets/video_play.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: '../../assets/video_play.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: 'Fourth Item',
      img: '../../assets/video_play.png',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      title: 'Fifth Item',
      img: '../../assets/video_play.png',
    },
  ];

const DailyTasks = ({navigation})=>{

    const [listData, setListData] = useState(DATA);
    const [videoData, setVideoData] = useState(DATAB);
    let row = [];
    let prevOpenedRow;

    // for button groups.
    const [selectedIndex, changeSelctedIndex] = useState(0);
    const buttons = ['Tasks', 'Videos'];

    const [state, changeState] = useState(1); 


    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
          });
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };


     /**
   *
   */
 const renderItem = ({ item, index }, onClick) => {
    //
    const closeRow = (index) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];

    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <>
        <Pressable
          style={{
            margin: 0,
            backgroundColor: '#93D84E',
            alignContent: 'center',
            justifyContent: 'center',
            width: '21%',
            height: "92%",
          }}>
          {/* <Button color="red" onPress={onClick} title="DELETE"></Button> */}
          <Text style={{color: 'white', paddingLeft: 5, paddingRight: 5, textAlign: 'center'}}>Edit</Text>
        </Pressable>
        <Pressable
        style={{
          margin: 0,
          backgroundColor: '#FD003A',
          alignContent: 'center',
          justifyContent: 'center',
          width: '21%',
          height: "92%",
        }}>
        {/* <Button color="red" onPress={onClick} title="DELETE"></Button> */}
        <Text style={{color: 'white', paddingLeft: 5, paddingRight: 5, textAlign: 'center'}}>Delete</Text>
      </Pressable>
      </>
      );
    };

    return (
        <GestureHandlerRootView>
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, onClick)
          }
          onSwipeableOpen={() =>{ 
            closeRow(index);
            changeState(2);
        }}
        onSwipeableClose={()=>{
            changeState(1);
        }}
          ref={(ref) => (row[index] = ref)}
          rightOpenValue={-100}
          style={{backgroundColor: 'white'}}
          >
          {/* <View
            style={{
              margin: 4,
              borderColor: 'grey',
              borderWidth: 1,
              padding: 9,
              backgroundColor: 'white',
            }}>
            <Text>{item.title}</Text>
          </View> */}
           <View 
            style={{
                display:'flex', flexDirection: 'row', borderWidth: 1,
                backgroundColor: '#FFFFFF', borderColor: '#F1F1F1', borderRadius: 16, 
                paddingTop: 15, paddingBottom: 15, paddingLeft: 10, marginBottom: 12,
                shadowOffset: {width: 100, height: 100}, shadowColor: 'rgba(0, 0, 0, 0.05)',
                shadowOpacity: 0.1,
            }}
            
            >
                {item.img ? 
                (<View style={{flex: 2}}>
                    <Image width={10} source={require('../../assets/video_play.png')} style={{width: 50, height: 50, marginTop: 10}} />
                </View>):(<></>)
                }
                
                <View style={{flex: 8,}}>
                    {/* <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={{ flex: 2, color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 600, fontSize: 10, textTransform: 'uppercase', lineHeight: 14}}>Article</Text>
                        <View style={{ flex: 1, marginEnd: 15}}>
                            <View style={{display: 'flex', flexDirection: 'row',backgroundColor: '#EBFFD8', width: 72,  paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 15,}}>
                                <Image source={require('../../assets/article_check.png')}/>
                                <Text style={{textAlign: 'center', paddingLeft: 5}}>Done</Text>
                            </View>
                        </View>
                    </View> */}
                    <Text style={{color: '#4E4E4E', fontFamily: 'Satoshi Variable', fontWeight: 900, fontSize: 16, lineHeight: 16, textTransform: 'uppercase', marginTop: 5, marginBottom: 5}}>How To Treat Cancer</Text>
                    <Text style={{color: '#8B8B8B', fontFamily: 'General Sans Variable', fontWeight: 400, fontSize: 13, lineHeight: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
                </View>
            </View>
         
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  const deleteItem = ({ item, index }, listNumber=0) => {
    console.log(item, index);
    if(listNumber === 0){
        let a = listData;
        a.splice(index, 1);
        console.log(a);
        setListData([...a]);
    }else{
        let a = videoData;
        a.splice(index, 1);
        console.log(a);
        setVideoData([...a]);
    }
   
  };


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
                    <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '600', color: '#8853A7', lineHeight: 20}}>Daily Task</Text>
                </View>
            </View>
            {/* Top Bar End */}
            <View style={{display: 'flex', flexDirection: 'row',  justifyContent: 'flex-end', marginTop: 15}}>
                <View style={{flex: 4, paddingLeft: 30, paddingTop: 5}}>
                    <Text style={{ color: '#0C212C', fontSize: 15, fontWeight: 500, lineHeight: 19}}>{date.toLocaleString().split(',')[0]}</Text>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity 
                        onPress={()=>showDatepicker()}
                    >
                        <Icon name="calendar" size={25} color='black'/>
                    </TouchableOpacity>
                    
                </View>

                {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                        />
                    )}
                   
            </View>
            <SafeAreaView style={styles.loginView}>
                <ScrollView>
                        
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

                         {selectedIndex == 0? (
                            <View style={{justifyContent: 'flex-start', marginTop: 2}}>
                                <View style={styles.container}>
                                    <FlatList
                                        data={listData}
                                        renderItem={(v) =>
                                        renderItem(v, () => {
                                            console.log('Pressed', v);
                                            deleteItem(v);
                                        })
                                        }
                                        keyExtractor={(item) => item.id}></FlatList>
                                </View>
                                {/* <Icon name='facebook' size={30} color='black'/> */}
                            </View>

                         ) : (
                         <>
                            <View style={{justifyContent: 'flex-start', marginTop: 2}}>
                                <View style={styles.container}>
                                    <FlatList
                                        data={videoData}
                                        renderItem={(v) =>
                                        renderItem(v, () => {
                                            console.log('Pressed', v);
                                            deleteItem(v, 1);
                                        })
                                        }
                                        keyExtractor={(item) => item.id}></FlatList>
                                </View>
                                {/* <Icon name='facebook' size={30} color='black'/> */}
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
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 10,
      backgroundColor: '#FFFFF',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
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
export default DailyTasks;