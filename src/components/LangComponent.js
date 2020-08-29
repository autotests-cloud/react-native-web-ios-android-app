import React from "react"
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import {  useDispatch, useSelector } from 'react-redux'

import { switchLang } from "./../reducers/app"

export const LangComponent = () => {
    
    const { lang, translations, languages } = useSelector(state => state.app)
    const dispatch = useDispatch()
    
    const onSwitchLang = (lang) => {
        dispatch(switchLang(lang))
    }

    return (<View style={styles.langContainer} accessibilityLabel={translations["Language menu"]} testID={translations["Language menu"]}>
        {
            languages.map((key, index) => 
                <TouchableOpacity style={styles.langItem} key={key} onPress={e => onSwitchLang(key)}>
                    <Text style={lang === key ? styles.active : styles.lang }>{ translations[key] }</Text>
                    {(index < languages.length - 1) && <Text style={styles.separator}>/</Text>}
                </TouchableOpacity>
            )
        }
    </View>)
}

const styles = StyleSheet.create({
    langItem: {
        display: "flex",
        flexDirection: "row",
    },
    langContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        height: 60,
        fontSize: 16,
        borderWidth: 0,
        flexDirection: "row",
        backgroundColor: "rgb(33, 150, 243)",
        display: "flex",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 24,
        justifyContent: "center",
        width: 90,
    },
    separator: {
        color: "white",
        paddingHorizontal: 6
    },
    lang:{
        textDecorationLine: "underline",
        color: "white",
    },
    active:{
        color: "white",
    }
  })