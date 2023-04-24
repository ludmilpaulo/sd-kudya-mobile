import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import tailwind from "tailwind-react-native-classnames";
import colors from "../configs/colors";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function JoinScreen({ navigation }: { navigation: any }) {
  return (
    <Screen style={tailwind`flex-1`}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <View style={styles.content}>
            <Text style={styles.title}>SD Food: Entrega de alimentos</Text>
            <Text style={styles.subTitle}>
              Receba comida à sua porta de milhares de restaurantes locais e
              nacionais incríveis.
            </Text>
            <AppButton
              title="Let's go"
              onPress={() => navigation.navigate("UserLogin")}
              color={"primary"}
              disabled={false}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    zIndex: 99999,
    top: 160,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
    // backgroundColor: colors.light
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 10,
  },
  input: {
    borderColor: colors.medium,
    backgroundColor: colors.light,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default JoinScreen;