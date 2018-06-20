import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import EstyleSheet from 'react-native-extended-stylesheet';

class LocationSettings extends Component {
    static navigationOptions = {
        title: 'Location Settings',
    };

    handleUseGpsPress = ()=>{
        console.log('Will use GPS to determine location');

        //go to the first screen on stack
        this.props.navigation.popToTop();
    }

    handleTextInputChangeText = (text)=>{
        console.log('Entered city name: '+ text);
    }

    render() {
        const list = [
            {
                title: 'Use GPS',
                icon: 'my-location',
                onPress: this.handleUseGpsPress,
                textInput: false,
            },
            {
                title: 'Enter City Name',
                icon: 'location-city',
                textInput: true,
                textInputPlaceholder: 'City Name',
                textInputOnChangeText: this.handleTextInputChangeText,
                textInputStyle: styles.input,
            },
        ];
        return (
            <ScrollView>
                <List>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon}}
                            onPress={item.onPress}
                            textInput={item.textInput}
                            textInputPlaceholder= {item.textInputPlaceholder}
                            textInputOnChangeText= {item.textInputOnChangeText}
                            textInputStyle= {item.textInputStyle}
                        />
                    ))
                }
                </List>
            </ScrollView>
        );
    }
}

export default LocationSettings;

/************ Styles *************/
const INPUT_HEIGHT= 48;
const BORDER_RADIUS= 4;
const styles= EstyleSheet.create({
    input:{
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText',
        textAlign: 'left',
        borderColor: '$border',
        borderWidth: '$hairlineWidth',
        borderRadius: BORDER_RADIUS,

    },
});