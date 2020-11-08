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

  
import { useDispatch, useSelector } from 'react-redux'
import EmailValidator from "email-validator"
import PasswordValidator from "password-validator"
import { switchLang } from "./../reducers/app"
import { postAuth } from "./../reducers/auth"

const passwordSchema = new PasswordValidator()

passwordSchema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
 

const PasswordErrop = (error) => error ? <View>
    <View>
        <Text>Your password should contain: </Text>
    </View>
    <View>
        <Text>Minimum length of 8 characters</Text>
        <Text>Numerical characters (0-9)</Text>
        <Text>Special characters</Text>
        <Text>Uppercase letter</Text>
        <Text>Lowercase letter</Text>
    </View>
</View> : null

const EmailErrop = (error) => error ? <View>
    <View>
        <Text>Wrong mail syntaxis!</Text>
    </View>
</View> : null

export const RecoverPasswordPage = () => {
    
    const { translations, lang } = useSelector(state => state.app)
    const dispatch = useDispatch()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const [ emailError, setEmailError ] = useState()
    const [ passwordError, setPasswordError ] = useState(false)

    const [ password, setPassword ] = useState("")
    const [ remember, setRemember ] = useState(false)
    const [ validation, setValidation ] = useState({})

    useEffect(() => {
        const v = {}
        if(email?.length < 1) v.email = translations["LoginValidation"]
        if(password?.length < 1) v.password = translations["PasswordValidation"]

        setEmailError(EmailValidator.validate(email))

        const validatePassList = passwordSchema.validate(password, { list: true })
        setPasswordError(validatePassList)

        setValidation(v)
    }, [ email, password, lang, remember, translations ])

    const onSwitchLang = (lang) => {
        dispatch(switchLang(lang))
    }

    const handleLogin = () => {

        if(Object.keys(validation).length) {
            setPasswordError(true)
            return
        }

        dispatch(postAuth({ email, password, lang, remember }))

    }

    return <View style={styles.loginContainer} accessibilityLabel={translations["Authorization form"]} testID={translations["Authorization form"]}>
        <View style={styles.label}>
            <Text>{ translations["Login"] }:</Text>
            <TextInput style={ styles.input } onChangeText={setEmail} value={ email } accessibilityLabel={translations["Login input"]} testID={translations["Login input"]}/>
            <EmailErrop error={ emailError } />
        </View>
        <View style={styles.label}>
            <Text>{ translations["Password"] }:</Text>
            <TextInput style={ styles.input } onChangeText={setPassword} value={ password } accessibilityLabel={translations["Password input"]} testID={translations["Password input"]} secureTextEntry={true}/>
            <PasswordErrop error={ passwordError } />
        </View>
        <View style={styles.loginOptions}>
            <View style={styles.optionLabel}>
                <Text style={styles.optionLabelText}>{ translations["Language"] }:</Text>
                <Picker itemStyle={{fontSize: 13}} mode={Picker.MODE_DROPDOWN} style={styles.optionPicker} selectedValue={ lang } onValueChange={onSwitchLang} accessibilityLabel={translations["Language select"]} testID={translations["Language select"]}>
                    <Picker.Item label="Русский" value="ru" />
                    <Picker.Item label="English" value="en" />
                </Picker>
            </View>
            <View style={styles.optionLabel}>
                <Text style={styles.optionLabelText}>{ translations["Remember"] }:</Text>
                <TouchableOpacity  onPress={e => setRemember(!remember)}>
                    <CheckBox boxType={"square"} style={styles.CheckBox} value={remember} accessibilityLabel={translations["Remember me checkbox"]} testID={translations["Remember me checkbox"]}/> 
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.submitWrapper}>
            <Button style={styles.loginButton} disabled={Object.keys(validation).length > 0} accessibilityLabel={translations["Login button"]} testID={translations["Login button"]} onPress={ handleLogin } title={ translations["Submit"] }/>
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
    },
    passwordError: {

    },
    loginError: {
        
    }
  })