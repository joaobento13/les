import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from "react-redux"

const imageBGLogin = require("../assets/bmw.jpg")

class FirstComponent extends Component {
    componentWillMount() {
        const { navigate } = this.props.navigation;
        if (this.props.login) {
        } else {
            navigate('Login')
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        style={styles.imageBackGround}
                        source={imageBGLogin}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageBackGround: {
        width: 1100,
        height: 713
    }
})

const mapStateToProps = state => {
    return {
        login: state.ConfigReducer.login
    };
};

export default connect(
    mapStateToProps,
    {
    }
)(FirstComponent);