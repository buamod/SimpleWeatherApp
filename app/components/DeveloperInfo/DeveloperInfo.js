import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { connectAlert } from '../Alert';
import styles from './styles';

class DeveloperInfo extends Component {
    static propTypes= {
        visible: PropTypes.bool,
        onExitButtonPress: PropTypes.func,
        alertWithType: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }
    
    handleNamePress= ()=>{
        url= 'habcdttps://www.linkedin.com/in/alibawazir/';
        Linking.openURL(url).catch(()=>{
            this.props.alertWithType('error', 'Sorry!', 'The following link cannot be opened right now\n'+ url);
        });
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

export default connectAlert(DeveloperInfo);