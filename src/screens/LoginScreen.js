import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            senha: null
        }
    }
    _setValue(pValor, pVariable) {
        this.setState({ [pVariable]: pValor })
    }

    goToHome = () => {
        const { navigate } = this.props.navigation
        if (this.state.email == null) {
            Alert.alert("Informações obrigatórias", "Insira um email.");
            return;
        }

        if (this.state.senha == null) {
            Alert.alert("Informações obrigatórias", "Insira uma senha.");
            return;
        }

        let obj = {
            email: this.state.email,
            senha: this.state.senha,
            type: "login"
        }
        navigate('Home', { usuario: obj })
    }

    goToCadastro = () => {
        const { navigate } = this.props.navigation
        navigate('Register')
    }

    renderHeader() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ color: "#184E88", fontSize: 34, marginTop: 15, marginLeft: 10, fontWeight: '600' }}>LES</Text>
            </View>
        )
    }

    renderMenu() {
        return (
            <View style={{ height: 40, flex: 1, flexDirection: "row", justifyContent: "flex-end", marginRight: 10 }}>
                <TouchableOpacity onPress={this.goToCadastro}>
                    <Text style={{ fontStyle: 'italic', color: "#D6D6D6", fontSize: 20, marginTop: 10, fontWeight: '500' }}>
                        CADASTRO
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontStyle: 'italic', color: "#D6D6D6", fontSize: 20, marginTop: 10, fontWeight: '500' }}> / </Text>
                <Text style={{ fontStyle: 'italic', color: "#184E88", fontSize: 20, marginTop: 10, fontWeight: '500' }}>LOGIN</Text>
            </View>
        )
    }

    renderForm() {
        return (
            <View style={{ marginTop: 80, paddingHorizontal: 20 }}>
                <View>
                    <Text>E-mail:</Text>
                    <TextInput type={'email'} style={styles.inputInside} onChangeText={text => this._setValue(text, 'email')} placeholder="seu@email.com.br" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>Senha:</Text>
                    <TextInput secureTextEntry style={styles.inputInside} onChangeText={text => this._setValue(text, 'senha')} placeholder="*********" />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={this.goToHome} style={{ backgroundColor: "#184E88", width: '100%', height: 40, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>EFETUAR LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <SafeAreaView />
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={true}
                    automaticallyAdjustContentInsets={false}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode='on-drag'
                    enableResetScrollToCoords={false} behavior="position" extraHeight={150}
                >
                    {this.renderHeader()}
                    {this.renderMenu()}
                    {this.renderForm()}
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputInside: {
        fontSize: 15,
        color: "#767676",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#404040",
        borderRadius: 5,
        width: '100%',
        height: 40,
        paddingHorizontal: 5
    }
})

const mapStateToProps = state => {
    return {
        login: state.ConfigReducer.login
    };
};

export default connect(
    mapStateToProps,
    {}
)(LoginScreen);