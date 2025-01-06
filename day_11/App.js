import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PaperProvider, Divider } from "react-native-paper";
import Base from "./components/Base";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Home />
              <StatusBar style="auto" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    padding: 10,
    justifyContent: "space-between",
  },
});
