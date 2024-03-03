import { Image, Pressable, Text, View } from "react-native";
import tw from "twrnc"
import { recipies } from "./../data/recipies"
import { useNavigation } from "@react-navigation/native";

export default function Recipies({activeCategorie}) {
    return <View style={tw`mx-4 space-y-3`}>
            <Text style={tw`font-bold text-neutral-600 text-xl`}>وصفات</Text>
            <View>
                {
                  recipies.map((recipe, index) => {
                    if (activeCategorie == recipe.categorieId) {
                        return <RecipeCard item={recipe} key={index} />
                    }
                  })  
                }
            </View>
    </View>
}

const RecipeCard = ({item, index}) => {
    const navigation = useNavigation()
    return (
        <View>
            <Pressable
                style={tw.style('flex justify-center items-center mb-4 aspect-video relative')}
                onPress={() => navigation.navigate("RecipieDetailScreen", {...item})}
            >
                <Image source={item.image}
                    style={tw.style('rounded-xl bg-black/5 absolute w-full h-full object-cover' )} />
                    <View style={tw`rounded-xl absolute top-0 left-0 w-full h-full bg-black/40`}></View>
                <Text style={tw`font-bold ml-2 text-3xl text-white`}>{item.name}</Text>
            </Pressable>
        </View>
    )
}