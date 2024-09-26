import {useState} from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { RichText } from '@/components/article/RichText';
import { ThemedText } from '@/components/shared/ThemedText';
import Collapsible from 'react-native-collapsible';

type ArticleSectionProps = {
  item: any;
  onLinkPress: (id: string) => void
 }

export function ArticleSection({item, onLinkPress}: ArticleSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.section}>
      <Pressable onPress={() => setIsCollapsed(isCollapsed => !isCollapsed)} style={styles.title}>
        <ThemedText type="subtitle">{item.title}</ThemedText>
      </Pressable>
      <Collapsible collapsed={isCollapsed}>
        <RichText html={item.text} onLinkPress={onLinkPress}/>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
  },
  title: {
    padding: 10,
    backgroundColor: 'rgb(210, 230, 255)'
  }
});