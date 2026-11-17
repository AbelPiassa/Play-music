import { View, StyleSheet, Text, Image } from "react-native";
import STYLES from "./Styles";


export default function PlayMusic({ navigation }) {
    return (
        <View style={Style.container}>
            <View style={Style.imageBkg}>
                <Image source={require("../assets/capa.jpg")} 
                />
            </View>
        

            <View style={Style.description}>
                <Text style={Style.mainDescription}>Descobertas da semana.</Text>
            </View>
        </View> 
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLES["playMusic-bkg"],
        flexDirection:"row",
    },
    height: 5,

    image:{
        width: '100',
        height:'100',
    },
    imageBkg:{
        flex:1,
        
    },

    description:{
        flex:2,
        justifyContent:"center",
        paddingStart:12,
    },
    mainDescription:{
        color: STYLES['main-text'],
        fontSize:14,
        fontWeight:'600'
    },
})