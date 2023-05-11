import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../components/firebaseConfig"

const SavedRecipes = () => {

    const recipeCollectionRef = collection(db, "Recipes")

    useEffect(() => {
        const getRecipeList = async () => {
            //READ DATA

            //SET RECIPE
            try {
                const data = await getDocs(recipeCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setRecipe(filteredData)
                console.log(filteredData, '🤬')
                console.log(recipes, '🤨')
            } catch (err) {
                console.error(err, "😁")
            }
        }
        getRecipeList()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text>Recipes Mapped below</Text>
                {recipes.map((recipe) => {
                    return (
                        <View key={recipe.id}>
                            <Text>{recipe.ingredients}</Text>
                            <Text>{recipe.instructions}</Text>
                            <Text>{recipe.title}</Text>
                            <Text>{recipe.nutritional}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    recipeCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default SavedRecipes;
