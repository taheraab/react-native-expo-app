import {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Article } from '@/components/article/Article';
export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Article />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
