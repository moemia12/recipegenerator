import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import {ActivityIndicator} from 'react-native';

const API_URL = 'http://localhost:3005/';

const MacroInput = () => {
  const [selected, setSelected] = React.useState('');
  const [number] = React.useState(null);
  const [protein, setProtien] = React.useState('');
  const [carbs, setCarbs] = React.useState('');
  const [fat, setFat] = React.useState('');
  const [exclude, setExclude] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [prompt, setPrompt] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const data = [{value: 'Breakfast'}, {value: 'Lunch'}, {value: 'Dinner'}];

  const recipePrompt = (protein, carbs, fat, selected, exclude, prompt) => {
    console.log(prompt, '💊');

    setPrompt(
      `Give me a ${selected} recipe. It should have the following calorie profile: ${protein} grams of protein, ${carbs} grams of carbohydrates, and ${fat} grams of fat. Please exclude the following ingredients: ${exclude}`,
    );
  };

  async function onSubmit(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({prompt: prompt}),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
      setResponse(data.result);
      console.log(data.result, '🛎')

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
  }

function formatDataWithBoldTags(response) {
  
  let formattedData = response.replace(/Ingredients:/g, '**Ingredients:**');
  formattedData = formattedData.replace(/Instructions:/g, '**Instructions:**');
  formattedData = formattedData.replace(/Nutritional Information/g, '**Nutritional Information**');
  formattedData = formattedData.replace(/Nutritional Value/g, '**Nutritional Information**' );
  formattedData = formattedData.replace(/Nutrition Information/g, '**Nutritional Information**' );
  formattedData = formattedData.replace(/- [\w\d\s.,-]+/g, '**$&**');

  const formattedTextArray = formattedData.split('**');

  return (
    <Text>
      {formattedTextArray.map((text, index) => {
        if (
          text === 'Ingredients:' ||
          text === 'Instructions:' ||
          text === 'Nutritional Information' 
        ) {
          return (
            <Text key={index} style={styles.responseHeaders}>
              {text}
            </Text>
          );
        } else {
          return <Text key={index}>{text}</Text>;
        }
      })}
    </Text>
  );
}

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.inputContainer}>
        {/* Protien */}
        <TextInput
          style={styles.input}
          onChangeText={setProtien}
          value={number}
          placeholder="Protien"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        {/* Carbs */}
        <TextInput
          style={styles.input}
          onChangeText={setCarbs}
          value={number}
          placeholder="Carbs"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        {/* Fat */}
        <TextInput
          style={styles.input}
          onChangeText={setFat}
          value={number}
          placeholder="Fat"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        {/* Exclude */}
        <TextInput
          style={styles.input}
          onChangeText={setExclude}
          value={number}
          placeholder="Exlude"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        {/* Meal Type */}
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="save"
          boxStyles={styles.dropdown}
          placeholder="Meal Type"
        />
      </View>
      <Button
        title="Submit"
        onPress={async () => {
          setLoading(true);
          recipePrompt(protein, carbs, fat, selected, exclude, prompt);
          await onSubmit(prompt);
          setLoading(false);
        }}
      />
      {loading && (
        <Text style={styles.loading}>
          Ok let's get you a recipe...
          <ActivityIndicator
            size="small"
            color="black"
          />
        </Text>
      )}

      <View style={styles.promptContainer}>
        <Text>
          Give me a {selected} recipe. It should have the following calorie
          profile : {protein} grams of protein, {carbs} grams of carbohydrates,
          and {fat} grams of fat. Please exclude the following ingredients:{' '}
          {exclude}
        </Text>
        <Text>{formatDataWithBoldTags(response)}</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  promptContainer: {
    padding: 10,
  },
  inputContainer: {
    padding: 10,
  },
  responseHeaders: {
    fontWeight: 'bold'
  },
  loading: {
    fontSize: 15,
    textAlign: 'center',
  }

});

export default MacroInput;

