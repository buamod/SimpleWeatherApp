import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import EstyleSheet from 'react-native-extended-stylesheet';

class LocationSettings extends Component {

    static navigationOptions = {
        title: 'Location Settings',
    };

    componentWillMount(){
        const { navigation } = this.props;
        const locationType = navigation.getParam('type', 'UNKNOWN');
        switch (locationType){
            case 'GPS':
                this.setState({
                    isGpsUsed: true,
                    cityName: '',
                });
                break;
            case 'CITY_NAME':
            case 'UNKNOWN':
            default:
                this.setState({
                    isGpsUsed: false,
                    cityName: navigation.getParam('cityName', 'UNKNOWN'),
                });
                break;
        }
    };

    componentDidMount(){
    }

    handleUseGpsSwitch = (isSwitchedOn)=>{
        console.log('GPS swithch is swithced '+ isSwitchedOn);
        this.setState({
            ...this.state,
            isGpsUsed: isSwitchedOn,
        });
        //go to the first screen on stack
        //this.props.navigation.popToTop();
    }

    handleTextInputChangeText = (text)=>{
        console.log('Entered city name: '+ text);
    }

    render() {
        const list = [
            {
                title: 'Use GPS',
                icon: 'my-location',
                switchButton: true,
                hideChevron: true,
                onSwitch: this.handleUseGpsSwitch,
                switched: this.state.isGpsUsed,
                textInput: false,
            },
            {
                title: 'Enter City Name',
                icon: 'location-city',
                hideChevron: true,
                textInput: true,
                textInputPlaceholder: this.state.cityName,
                textInputEditable: !this.state.isGpsUsed,
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
                            key= {i}
                            title= {item.title}
                            leftIcon= {{name: item.icon}}
                            onPress= {item.onPress}
                            switchButton= {item.switchButton}
                            hideChevron= {item.hideChevron}
                            onSwitch= {item.onSwitch}
                            switched= {item.switched}
                            textInput={item.textInput}
                            textInputPlaceholder= {item.textInputPlaceholder}
                            textInputEditable= {item.textInputEditable}
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