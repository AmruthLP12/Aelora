import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View } from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Aelora!</Text>
      <StatusBar style="='auto"/>
      <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
})