import React, { useState, useEffect } from "react"
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
    Picker,
    CheckBox,
    Platform,
    TouchableOpacity,
  } from 'react-native';

import langs from "./../langs"

export const LoginPage = ({ lang, onLogin, onSetLang }) => {

    const [ login, setLogin ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ remember, setRemember ] = useState(false)
    const [ validation, setValidation ] = useState({})

    useEffect(() => {
        const v = {}
        if(login?.length < 1) v.login = langs(lang, "LoginValidation")
        if(password?.length < 1) v.login = langs(lang, "PasswordValidation")
        setValidation(v)
    }, [ login, password, lang, remember ])

    const handleLogin = () => {
        onLogin(Object.keys(validation).length ? undefined : {
            login, password, lang, remember
        })
    }

    return <View style={styles.loginContainer} accessibilityLabel={langs(lang, "Authorization form")} testID={langs(lang, "Authorization form")}>
        <View style={styles.label}>
            <Text>{ langs(lang, "Login") }:</Text>
            <TextInput style={styles.input} onChangeText={setLogin} value={ login } accessibilityLabel={langs(lang, "Login input")} testID={langs(lang, "Login input")}/>
        </View>
        <View style={styles.label}>
            <Text>{ langs(lang, "Password") }:</Text>
            <TextInput style={styles.input} onChangeText={setPassword} value={ password } accessibilityLabel={langs(lang, "Password input")} testID={langs(lang, "Password input")} secureTextEntry={true}/>
        </View>
        <View style={styles.loginOptions}>
            <View style={styles.optionLabel}>
                <Text style={styles.optionLabelText}>{ langs(lang, "Language") }:</Text>
                <Picker itemStyle={{fontSize: 13}} mode={Picker.MODE_DROPDOWN} style={styles.optionPicker} selectedValue={ lang } onValueChange={onSetLang} accessibilityLabel={langs(lang, "Language select")} testID={langs(lang, "Language select")}>
                    <Picker.Item label="Русский" value="Russian" />
                    <Picker.Item label="English" value="English" />
                </Picker>
            </View>
            <View style={styles.optionLabel}>
                <Text style={styles.optionLabelText}>{ langs(lang, "Remember") }:</Text>
                <TouchableOpacity  onPress={e => setRemember(!remember)}>
                    <CheckBox boxType={"square"} style={styles.CheckBox} value={remember} accessibilityLabel={langs(lang, "Remember me checkbox")} testID={langs(lang, "Remember me checkbox")}/> 
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.submitWrapper}>
            <Button style={styles.loginButton} disabled={Object.keys(validation).length > 0} accessibilityLabel={langs(lang, "Login button")} testID={langs(lang, "Login button")} onPress={ handleLogin } title={ langs(lang, "Submit") }/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%"
    },
    label: {
        textAlign: "left",
        flexDirection: "column",
        fontSize: 13,
        marginTop: 8,
        display: "flex",
        alignSelf: "stretch",
    },
    optionLabel: {
        textAlign: "left",
        flexDirection: "row",
        fontSize: 13,
        marginTop: Platform.OS === "web" ? 16 : 32,
        height: 25,
        alignItems: "center",
        alignSelf: "stretch",
    },
    CheckBox: {
        marginRight: 8,
        fontSize: 10,
        height: Platform.OS === "web" ? 16 : 20,
        width: Platform.OS === "web" ? 16 : 20,
        borderColor: "gray",
        marginLeft: 16,
        zIndex: 10
    },
    optionPicker: {
        marginRight: 32,
        marginLeft: 16,
        width: 150,
        height: Platform.OS === "web" ? 24 : 70,
        fontSize: 12,
        justifyContent: "center",
        zIndex: 0,
    },
    input: {
        fontSize: 15,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 8,
        padding: 4,
        marginLeft: 16,
        alignSelf: "stretch",
        zIndex: 10,
        
    },
    loginButton: {
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    submitWrapper: {
        marginTop: 16,
        marginLeft: 16,
        borderWidth: 1,
        borderColor: Platform.OS === "web" ? "transparent" : "lightgray",
        alignSelf: "stretch",
    },
    loginOptions: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: Platform.OS === "web" ? 8 : 32,
        height: Platform.OS === "web" ? 80 : 130,
        display: "flex",
        alignItems: "center",
        zIndex: 1,
        marginBottom: 32,
        overflow: "hidden"
    },
    optionLabelText: {
        width: 120,
        textAlign: "right"
    }
  })