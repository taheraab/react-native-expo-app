import { ThemedText } from '@/components/shared/ThemedText';
import phraseGroup from '../../data/phraseGroup';

export function Phrasionary({id}: any) {
  return (
    <>
      <ThemedText type="title">{phraseGroup[id].title}</ThemedText>
      <ThemedText type="subtitle">{phraseGroup[id].abstract}</ThemedText>
    </>
  )
}
