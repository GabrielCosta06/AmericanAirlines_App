import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "./components/Button";
import Background from "./components/Background";
import Logo from "./components/Logo";
import RoundButtonWithPersonIcon from "./components/roundButtonPerson";
import RoundButtonWithArrowIcon from "./components/roundButtonArrow";

const PlaceholderImage = require("./assets/background.jpg");
const LogoPlaceholder = require("./assets/Logo.png");

const PASSWORD_CONTAINER_PADDING = 30;

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Background placeholderImageSource={PlaceholderImage} />
        <Logo ImageSrc={LogoPlaceholder} />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.inputContainer}>
          <Text style={{ ...styles.label, marginTop: 20 }}>Last name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>AAdvantage # or username</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View
            style={[
              styles.passwordInputContainer,
              password !== "" && { paddingRight: PASSWORD_CONTAINER_PADDING },
            ]}
          >
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            {password !== "" && (
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color="#1994fe"
                onPress={toggleShowPassword}
              />
            )}
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Keep me logged in</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#1994fe" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
        </View>
        <View style={styles.buttonSignIn}>
          <Button label="Log in" />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <RoundButtonWithPersonIcon />
          <Text
            style={{
              marginTop: -250,
              marginLeft: 15,
              fontWeight: "500",
              color: "white",
              fontSize: 17,
            }}
          >
            Join AAdvantage <Text style={{ fontSize: 12 }}>®</Text>
          </Text>
        </View>
        <View style={{ marginLeft: "12%" }}>
          <RoundButtonWithArrowIcon />
          <Text
            style={{
              marginTop: -250,
              marginLeft: 20,
              fontWeight: "500",
              color: "white",
              fontSize: 17,
            }}
          >
            Continue as guest
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginTop: -265,
            marginLeft: "15%",
            color: "white",
            fontSize: 15,
          }}
        >
          Need AAdvantage number or password?
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginTop: -228,
            marginLeft: "40%",
            color: "white",
            fontSize: 15,
          }}
        >
          Privacy policy
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 400,
    backgroundColor: "#2b2b2b",
    borderRadius: 10,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 23,
  },
  input: {
    height: 50,
    width: "100%",
    marginBottom: 20,
    fontSize: 16,
    color: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#444444",
  },
  buttonSignIn: {
    backgroundColor: "#1994fe",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  label: {
    marginBottom: -13,
    color: "#8d8d8d",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -13,
  },
  switchLabel: {
    marginRight: 165,
    fontSize: 14,
    color: "#8d8d8d",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
