import {useState} from 'react';
import diabetes from '../../data/diabetes';
import { FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/shared/ThemedText';
import { ArticleSection } from '@/components/article/ArticleSection';
import { Sheet } from '@/components/shared/Sheet';
import { Phrasionary } from '@/components/article/Phrasionary';
import phraseGroup from '../../data/phraseGroup';

export function Article() {
  const [phraseGroupId, setPhraseGroupId] = useState('');
  const phraseGroupElm = phraseGroupId && phraseGroup[phraseGroupId] ? (
    <Sheet content={<Phrasionary id={phraseGroupId} />} onClose={() => setPhraseGroupId('')} />
  ) : null;

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">{diabetes.title}{'\n'}</ThemedText>
       <FlatList
        data={diabetes.sections}
        renderItem={({item}: any) => <ArticleSection item={item} onLinkPress={(id) => setPhraseGroupId(id) }/>}
        keyExtractor={(section: any) => section.id}
        showsHorizontalScrollIndicator={true}
      />
       {phraseGroupElm}
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