import React from "react"
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

  import langs, { translations } from "./../langs"

export const LangComponent = ({ lang, onSetLang }) => (<View style={styles.langContainer} accessibilityLabel={langs(lang, "Language menu")} testID={langs(lang, "Language menu")}>
        {Object.keys(translations).map((key, index) => 
                <TouchableOpacity style={styles.langItem} key={key} onPress={e => onSetLang(key)}>
                    <Text style={lang === key ? styles.active : styles.lang }>{ translations[key].label }</Text>
                    {(index < Object.keys(translations).length - 1) && <Text style={styles.separator}>/</Text>}
                </TouchableOpacity>
            )}
    </View>)

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