import { useState } from "react";
import { SafeAreaView,ScrollView,Switch,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { styles } from "./Styles/styles";
import { switchon } from "./Styles/switchon";
import NumericInput from "react-native-numeric-input";
import { RadioButton } from "react-native-paper";
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(false);
  
  function calculate() {
    if (!weight) {
      setError(true);
      return;
    }

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * hours;
    let result = 0;

    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      setResult(0);
    } else {
      setResult(result);
    }
  }

  const determineColor = (result) => {
    if (result < 0.5) {
      return "green";
    } else if (result > 0.5 && result < 3) {
      return "yellow";
    } else if (result > 3) {
      return "red";
    }
  };


  const [on, setOn] = useState(false);
  
  const [fontsLoaded] = useFonts({
      Poppins: require("./assets/fonts/Poppins-MediumItalic.ttf"),
      PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      PoppinsBold: require("./assets/fonts/Poppins-BoldItalic.ttf")
  });
   
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={ [styles.container, {backgroundColor: on ? switchon.container.backgroundColor : styles.container.backgroundColor}] }>
      <ScrollView>
        <Switch
          style={styles.switch}
          value={on}
          onValueChange={() => setOn(!on)}
          thumbColor={ on ? switchon.thumbColor.color : styles.thumbColor.color}
          trackColor={styles.myTrackColors}
        />

        <Text style={[styles.heading, {color: on ? switchon.heading.color : styles.heading.color}]}>Alcometer</Text>
        <Icon name="beer-outline"  style={styles.icon} />


        <Text style={[styles.text, {color: on ? switchon.text.color : styles.text.color}]}>Weight in kg</Text>
        {error && <Text style={styles.error}>Please enter your weight!</Text>}
        <TextInput
          keyboardType="number-pad"
          value={weight}
          style={styles.textInput}
          onChangeText={(t) => {
            setError(false);
            setWeight(t);
          }}
        />

        <Text style={[styles.text, {color: on ? switchon.text.color : styles.text.color}]}>Bottles</Text>
        <NumericInput
          onChange={(q) => setBottles(q)}
          value={bottles}
          minValue={0}
          totalWidth={150}
          totalHeight={40}
          rounded
          borderColor={styles.textwhiteblack.color}
          containerStyle={{ backgroundColor: "#3e8746" }}
          textColor={on ? switchon.textwhiteblack.color : styles.textwhiteblack.color}
          iconStyle={{ color: on ? switchon.textwhiteblack.color : styles.textwhiteblack.color}}
          leftButtonBackgroundColor={ on ? "#c0ffc7" : "#154e34"}
          rightButtonBackgroundColor={ on ? "#c0ffc7" : "#154e34"}
        />

        <Text style={[styles.text, {color: on ? switchon.text.color : styles.text.color}]}>Hours</Text>
        <NumericInput
          onChange={(q) => setHours(q)}
          value={hours}
          minValue={0}
          totalWidth={150}
          totalHeight={40}
          rounded
          borderColor={styles.textwhiteblack.color}
          containerStyle={{ backgroundColor: "#3e8746" }}
          textColor={on ? switchon.textwhiteblack.color : styles.textwhiteblack.color}
          iconStyle={{ color: on ? switchon.textwhiteblack.color : styles.textwhiteblack.color }}
          leftButtonBackgroundColor={on ? "#c0ffc7" : "#154e34"}
          rightButtonBackgroundColor={ on ? "#c0ffc7" : "#154e34"}
        />

        <Text style={[styles.text, {color: on ? switchon.text.color : styles.text.color}]}>Gender</Text>
        <RadioButton.Group onValueChange={(s) => setGender(s)} value={gender}>
          <GenderSelection label={"Male"} value={"male"}/>
          <GenderSelection label={"Female"} value={"female"} />
        </RadioButton.Group>

        <Text style={[styles.result, { color: determineColor(result) }]}>
          {result.toFixed(2)}
        </Text>

        <TouchableOpacity style={[styles.button, {backgroundColor: on ? switchon.button.backgroundColor : styles.button.backgroundColor}]} onPress={calculate}>
          <Text style={[styles.textwhiteblack, {color: on ? switchon.textwhiteblack.color : styles.textwhiteblack.color}]}>CALCULATE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );


function GenderSelection({ label, value }) {
  return (
    <View style={styles.radiobutton} >
      <RadioButton value={value} color={styles.radiobutton.color} borderColor={"white"} />
      <Text style = {styles.text.color}>{label}</Text>
    </View>
  );
}}

