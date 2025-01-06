import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./components/Home";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
   
        <View >
     
        
          <Home />
      

      <StatusBar style="auto" />
    </View>
    
    
  );
}

