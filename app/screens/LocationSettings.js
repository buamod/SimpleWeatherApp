import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import EstyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { toggleGps, changeCityName } from '../actions/settings';

class LocationSettings extends Component {
    static propTypes= {
        dispatch: PropTypes.func,
    };

    static navigationOptions = {
        title: 'Location Settings',
    };

    componentWillMount(){
    };

    componentDidMount(){
    }

    handleGpsSwitch = (isSwitchedOn)=>{
        console.log('GPS swithch is swithced '+ isSwitchedOn);
        this.props.dispatch(toggleGps(isSwitchedOn));
        //go to the first screen on stack
        //this.props.navigation.popToTop();
    }

    handleTextInputChangeText = (text)=>{
        console.log('Entered city name: '+ text);
        /*TODO: dispatch action*/
        this.props.dispatch(changeCityName(text));
    }

    render() {
        const list = [
            {
                title: 'Use GPS',
                icon: 'my-location',
                switchButton: true,
                hideChevron: true,
                onSwitch: this.handleGpsSwitch,
                switched: this.props.isGpsSelected,
                textInput: false,
            },
            {
                title: 'Enter City Name',
                icon: 'location-city',
                hideChevron: true,
                textInput: true,
                textInputPlaceholder: this.props.cityName, 
                textInputEditable: !this.props.isGpsSelected,
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

const mapStateToProps= (state)=>{
    const isGpsSelected = state.settings.location.isGpsSelected;
    const cityName = state.settings.location.cityName;
    //anything returned from this function will be accessable by this.props
    return {
        isGpsSelected,
        cityName,
    }
};

export default connect(mapStateToProps)(LocationSettings); //the duplicate () means call the function twice 

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