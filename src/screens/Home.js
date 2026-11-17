import { Text, View, Button, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { STYLES } from "../components/Styles";
import { Feather } from "@expo/vector-icons";
import { Touchable } from "react-native";
import { PlayMusic } from "../components/PlayMusic";

export default function Home({ navigation }) {
    return (
        <View style={Style.container}>
            <StatusBar style="auto" />

            <View style={Style.recomendations}>

                <View style={Style.recomentionsHeader}>

                    <Text style={Style.sectionTitle}>Bom Dia</Text>

                    <TouchableOpacity>

                        <Feather name="settings" size={20} color="#fff"
                        />
                    </TouchableOpacity>
                </View>

                <View style={Style.recomentionsBody}>
                </View>
            </View>




            <View style={Style.recents}>
            </View>

            <View style={Style.favorites}>
            </View>

            <View style={Style.playing}>

                <Button
                    title="Player"
                    onPress={() => navigation.navigate("Playing")}
                />
            </View>





        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: STYLES["main-background"],
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 40,
    },

    recomendations: {
        flex: 2,
    },

    recomentionsHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    recomentionsBody: {
        flex: 4,
    },

    recents: {
        flex: 2,
    },

    favoretes: {
        flex: 2,
    },

    playing: {
        flex: 1,
    },

    sectionTitle:
    {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",

    },
    
})