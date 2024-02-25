import { Button, View, Text } from 'react-native';
import tw from "twrnc"
import Categorie from '../components/Categorie';

export default function HomeScreen({navigation}) {
    return (
    <View>
        <Text>Home Screen</Text>
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
      </View>
    );
  }