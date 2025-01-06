import { StyleSheet, Text, View } from "react-native";
import { PaperProvider, Divider } from "react-native-paper";

export default function Home(){
    return(
        <view>
            <Text variant="displayLarge" style={styles.heading}>
                   Welcome...!!!
            </Text>
            <Divider/>
            <Text variant="bodyMedium" style={styles.body}>
                    Situated in the land that was once part of the kingdom of the legendary
                    Vanni Kings, the University of Vavuniya is a higher seat of learning and
                    research in this region, which provides higher education in the fields
                    of Applied Science ,Business Management and Technological Studies.
                  </Text>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
  
      padding: 10,
      justifyContent: "center",
    },
    ody: {
        padding: 5,
        textAlign: "justify",
      },
    heading: {
        fontSize: 36,
        justifyContent: "center",
      },
  });
  