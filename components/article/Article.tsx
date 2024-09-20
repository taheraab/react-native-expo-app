import diabetes from '../../data/diabetes';
import { FlatList, View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RichText } from '@/components/article/RichText';
import { ThemedText } from '@/components/shared/ThemedText';
import { ScrollView } from 'react-native-gesture-handler';

export function Article() {
  const renderSection = ({item}: any) => {
    return (
      <View style={styles.section}>
        <ThemedText type="subtitle">{item.title}{'\n'}</ThemedText>
        <RichText html={item.text} />
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">{diabetes.title}{'\n'}</ThemedText>
       <FlatList
        data={diabetes.sections}
        renderItem={renderSection}
        keyExtractor={(section: any) => section.id}
        showsHorizontalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  section: {
    marginVertical: 8,
  },
});