import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserWithFacebook } from '../actions';
import { Card, CardSection, TextBox, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    onFacebookButtonPress() {
        this.props.loginUserWithFacebook();
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
            );
        }
        return (
            <View>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </View>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextBox
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                    <TextBox
                        isPassword
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                {this.renderButton()}
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    orTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
    loginUserWithFacebook
})(LoginForm);
