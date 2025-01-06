import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, Divider } from "react-native-paper";

export default function Base() {
  return (
    <View>
      <Text variant="displayLarge" style={styles.heading}>
        About:
      </Text>
      <Divider />
      <Text variant="bodyMedium" style={styles.body}>
        Situated in the land that was once part of the kingdom of the legendary
        Vanni Kings, the University of Vavuniya is a higher seat of learning and
        research in this region, which provides higher education in the fields
        of Applied Science ,Business Management and Technological Studies.
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 5,
    textAlign: "justify",
  },
  heading: {
    fontSize: 36,
  },
});
