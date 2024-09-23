import diabetes from '../../data/diabetes';
import { FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/shared/ThemedText';
import { ArticleSection } from '@/components/article/ArticleSection';


export function Article() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">{diabetes.title}{'\n'}</ThemedText>
       <FlatList
        data={diabetes.sections}
        renderItem={({item}: any) => <ArticleSection item={item} />}
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