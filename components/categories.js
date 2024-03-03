import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc"
import { categories } from "./../data/categories"
export default function Categories({activeCategorie, setActiveCategorie}) {
    return <View>
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`space-x-4`}
        contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                categories.map((cat, index) => {
                    let isActive = cat.id === activeCategorie
                    let activeClass = isActive ? "bg-amber-400" : "bg-black/10"
                    return (
                        <TouchableOpacity
                        key={index}
                        onPress={() => setActiveCategorie(cat.id)}
                        style={tw`flex items-center space-y-1`}>
                            <View style={tw`rounded-full p-[6px] mx-1 ${activeClass}`}>
                                <Image source={cat.image}
                                    style={tw.style('rounded-full' ,{height: 100, width: 100})} />
                            </View>
                            <Text style={tw`text-neutral-600 text-xl`}>{cat.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </View>
}