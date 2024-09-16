import diabetes from '../../data/diabetes';

import { SafeAreaView } from 'react-native-safe-area-context';
import { RichText } from '@/components/article/RichText';
import { ThemedText } from '@/components/shared/ThemedText';

export function Article() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <ThemedText type="title">{diabetes.title}{'\n'}</ThemedText>
        <ThemedText type="subtitle">{diabetes.sections[0].title}{'\n'}</ThemedText>
        <RichText html={diabetes.sections[0].text} />
    </SafeAreaView>
  );
};