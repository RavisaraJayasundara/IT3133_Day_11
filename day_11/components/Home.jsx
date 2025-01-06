import { PaperProvider ,Text} from "react-native-paper";
import { StyleSheet,View } from "react-native";
import { ScrollView } from "react-native-web";

export default function Home(){
    return(
        <>
             <PaperProvider>
                <ScrollView>
                    <View style={styles.container}>
                    <Text variant="headlineLarge">Welcome...!!!</Text>
                    </View>
                </ScrollView>
             </PaperProvider>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center',
        padding: 10
    },
  });
  