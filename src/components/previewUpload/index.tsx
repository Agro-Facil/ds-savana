import React, { useRef, useContext, PropsWithChildren } from 'react';
import { Image, StyleSheet, View, Text, Dimensions, FlatList } from 'react-native';
import Video from 'react-native-video';
import { ContextTheme } from '../../provider';
import { PreviewUploadStyles } from './styles';

interface PreviewUploadProps {
  data: {
    name: string,
    type: 'video' | 'image',
    src: string
  }[]
}

const { width } = Dimensions.get('window')

const PreviewUpload = ({ data }: PropsWithChildren<PreviewUploadProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const styles = PreviewUploadStyles;

  const Separator = ({ withHeight }: { withHeight?: boolean }) => (
    <View
      style={{
        width: 12,
        height: withHeight ? (width / 2.2) : 'auto',
      }}
    />
  );

  return (
    <View style={{ flexDirection: 'row', width }}>
      <Text style={styles.label}>
        Imagens
      </Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingLeft: 0,
        }}
        keyExtractor={(_, index) => `preview-${index}`}
        ItemSeparatorComponent={() => <Separator />}
        ListHeaderComponent={() => <Separator withHeight />}
        ListFooterComponent={() => <Separator withHeight />}
        renderItem={({ item }) => {
          return (
            <View style={[styles.container, { height: width / 3.4 }]}>
              {item.type === 'image' ? (
                <Image
                  source={{ uri: item.src }}
                  style={[styles.image, { height: width / 3.4, width: width / 3.4 }]}
                />
              ) : (
                <Video
                  source={{ uri: item.src }}
                  style={[styles.image, { height: width / 3.4, width: width / 3.4 }]}
                  resizeMode="cover"
                  repeat={true}
                  paused={true}
                  controls={true}
                />
              )}
              <Text style={[styles.name, { width: width / 3.4 }]}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PreviewUpload;
