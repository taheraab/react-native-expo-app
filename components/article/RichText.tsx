import {useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import { ThemedText } from '@/components/shared/ThemedText';
import { Sheet } from '@/components/shared/Sheet';
import phraseGroup from '../../data/phraseGroup';
import { Element } from 'domhandler';
import { replaceElement } from 'domutils';

type RichTextProps = {
  html: string
}

function PhraseGroup({id}: any) {
  return (
    <>
      <ThemedText type="title">{phraseGroup[id].title}</ThemedText>
      <ThemedText type="subtitle">{phraseGroup[id].abstract}</ThemedText>
    </>
  )
}

function onElement(element: Element) {
  // Replace span with anchor tag
  if (element.attribs['data-type'] === 'link') {
    const link = new Element('a', {
      href: '#',
      ['data-phrasegroup-id']: element.attribs['data-phrasegroup-id'],
    }, element.children)
    replaceElement(element, link);
  }
}


const domVisitors = {
  onElement: onElement
};

export function RichText({html}: RichTextProps) {
  const { width } = useWindowDimensions();
  const [phraseGroupId, setPhraseGroupId] = useState(null);

  console.log('phraseGroupId', phraseGroupId);

  function LinkRenderer({
    TDefaultRenderer,
    ...props
  }: any) {
    return (
      <TDefaultRenderer
        {...props}
        onPress={() => setPhraseGroupId(props.tnode.domNode.attribs['data-phrasegroup-id'])}
      />
    );
  }

  const renderers = {
    a: LinkRenderer
  };
  
  const phraseGroupElm = phraseGroupId ? (
    <Sheet content={<PhraseGroup id={phraseGroupId} />} onClose={() => setPhraseGroupId(null)} />
  ) : null;

  return (
    <>
    <RenderHtml contentWidth={width} source={{html}} renderers={renderers} domVisitors={domVisitors}/>
    {phraseGroupElm}
    </>
  )
}
