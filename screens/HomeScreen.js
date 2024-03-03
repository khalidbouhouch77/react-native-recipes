import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, ViewComponent, Image } from 'react-native';
import tw from "twrnc"
import { BellIcon } from "react-native-heroicons/outline"
import Categories from '../components/categories';
import Recipies from "../components/recipies"
import { useState } from 'react';
export default function HomeScreen({navigation}) {
    const [activeCategorie, setActiveCategorie] = useState('دجاج')
    return (
    <View style={tw`flex-1 bg-white`}>
        <StatusBar style='dark' />
        <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
            style={tw`space-y-6 pt-14`}
        >
            <View style={tw`space-y-2 mb-2`}>
                <View>
                    <Text style={tw`text-xl text-neutral-600`}>اكتشف المزيد من الاكلات</Text>  
                </View>
            </View>


            {/** Categories */}
            <View>
                <Categories activeCategorie={activeCategorie} setActiveCategorie={setActiveCategorie} />
            </View>
            {/** Categories */}

            {/** Recipies */}
            <View>
                <Recipies activeCategorie={activeCategorie} />
            </View>
            {/** Recipies */}

        </ScrollView>
      </View>
    );
  }