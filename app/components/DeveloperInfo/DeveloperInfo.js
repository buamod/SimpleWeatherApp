import React, { Component, PropTypes } from 'react';
import { Modal, Text, TouchableOpacity, View, Image, Linking } from 'react-native';

import styles from './styles';

const catchOpenURLError= ()=>{
    alert('An error occured');
}

class DeveloperInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }

    handleNamePress= ()=>{
        Linking.openURL('habcdttps://www.linkedin.com/in/alibawazir/').catch(catchOpenURLError);
    }

    render(){
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    //hide the Modal
                    this.props.onExitButtonPress();
                }}
            >
                <View style={styles.container}>
                    <View style={styles.bodyTextContainer}>
                        <Text style= {styles.bodyText}>
                            This app is developed by
                        </Text>
                        <TouchableOpacity
                            onPress= {this.handleNamePress}
                            style= {styles.button}
                        >
                            <Text style= {styles.bodyTextBold}>
                                Ali Ba Wazir
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source= {require('./images/alibawazir.jpg')}
                        resizeMode= 'contain'
                        style={styles.developerImage}
                    />
                    <TouchableOpacity
                        onPress= {this.props.onExitButtonPress}
                        style= {styles.button}
                    >
                        <Text style= {styles.buttonText}>
                            Exit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

DeveloperInfo.PropTypes= {
    visible: PropTypes.bool,
    onExitButtonPress: PropTypes.func,
};

export default DeveloperInfo;