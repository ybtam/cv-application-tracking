import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className={'flex-1 justify-center items-center'}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text className={'text-xl'}>Normal text</Text>
      <Text className={"text-blue-500"}>Is this working?</Text>
    </View>
  );
}
