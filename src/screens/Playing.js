import { Button, Text, View } from "react-native";


export default function playing({navigation}) {
    return(
            <View>
                <Text>Tocando agora.....</Text>
                <Button
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                />

            </View>
    )
}