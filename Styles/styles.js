import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
    backgroundColor: "#c0ffc7",
  },

  //Switch
  switch: {
    alignSelf: "flex-start",
    marginTop: 45,
  },

  thumbColor: {
    color: "#1d4b32",
  },

  myTrackColors: { false: "white", true: "white" },

  //heading
  heading: {
    alignSelf: "center",
    marginTop: 7,
    fontSize: 40,
    color: "#1d4b32",
    fontFamily: "Poppins",
  },

  //beer-icon
  icon: {
    color: "green",
    fontSize: 40,
    alignSelf: "center",
    marginBottom: 25,
  },

  //labels
  text: {
    fontSize: 20,
    color: "#1d4b32",
    marginTop: 10,
    fontFamily: "PoppinsSemiBold",
  },

  textInput: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    backgroundColor: "#faf6a9",
    borderColor: "#1d4b32",
  },

  //Warning
  error: {
    color: "red",
    fontSize: 20,
    fontFamily: "PoppinsBold",
  },

  //RadioButton
  radiobutton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#faf6a9",
    borderColor: "#1d4b32",
    borderWidth: 1,
    padding: 5,
    color: "#1d4b32",
  },

  //CalculateButton
  button: {
    alignSelf: "center",
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    width: 200,
    backgroundColor: "#1d4b32",
    marginBottom: 20,
  },

  //result-text
  result: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 35,
    fontFamily: "PoppinsBold",
    alignSelf: "center",
  },

  //text and icons (NumericInput and Calculate)
  textwhiteblack: {
    color: "white",
    fontFamily: "Poppins",
  },
});

export { styles };
