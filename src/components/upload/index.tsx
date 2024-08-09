import React, { useContext, useEffect, useState } from "react";
import { ContextTheme } from "../../provider";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Alert, View } from "react-native";
import Button from "../button";
import { UploadIcon } from "lucide-react-native";

export interface UploadProps {
  type?: 'file' | 'image' | 'photo' | 'video'
  label?: string
  onSave?: (result: ImagePicker.ImagePickerAsset | DocumentPicker.DocumentPickerAsset) => void
}

export const Upload = ({ type = 'image', label, onSave }: UploadProps): JSX.Element => {
  const config = useContext(ContextTheme);
  const [permissionCamera, setPermissionCamera] = useState<boolean>(false);
  const [permissionImage, setPermissionImage] = useState<boolean>(false);

  const getCamPermission = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    setPermissionCamera(cameraPermission.status === 'granted');
  }

  const getGalleryPermission = async () => {
    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setPermissionImage(galleryPermission.status === 'granted');
  }

  useEffect(() => {
    (async () => {
      (type === 'photo' && await getCamPermission());
      ((type === 'image' || type === 'video') && await getGalleryPermission());
    })();
  }, []);

  const pickImage = async () => {
    try {
      if (!permissionImage) {
        Alert.alert(
          'Permissão da galeria',
          'Acesso a galeria negado. Deseja dar permissão?',
          [
            {
              text: 'Sim',
              onPress: async () => {
                await getGalleryPermission();
              },
            },
            {
              text: 'Não',
              onPress: () => { },
            },
          ]
        );
      } else {
        let mediaTypes = ImagePicker.MediaTypeOptions.Images

        if (type === 'video') {
          mediaTypes = ImagePicker.MediaTypeOptions.Videos
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.6,
          exif: false,
        });

        if (!result.canceled && result.assets[0]) {
          onSave?.(result.assets[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (!result.canceled && result.assets[0]) {
        onSave?.(result.assets[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const takePhoto = async () => {
    try {
      if (!permissionCamera) {
        Alert.alert(
          'Permissão da câmera',
          'Acesso a câmera negado. Deseja dar permissão?',
          [
            {
              text: 'Sim',
              onPress: async () => {
                await getCamPermission();
              },
            },
            {
              text: 'Não',
              onPress: () => { },
            },
          ]
        );
      } else {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          cameraType: ImagePicker.CameraType.back,
          aspect: [1, 1],
          base64: true,
          quality: 0.55,
          exif: false,
        });
        if (!result.canceled && result.assets[0]) {
          onSave?.(result.assets[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const currentLabel = () => {
    if (label) return label

    const labels = {
      image: 'Anexar imagem',
      file: 'Anexar arquivo',
      video: 'Anexar video',
      photo: 'Tirar foto'
    }

    return labels[type]
  }

  const handleUpload = () => {
    return {
      image: pickImage,
      video: pickImage,
      file: pickDocument,
      photo: takePhoto
    }
  }

  return (
    <View>
      <Button
        onPress={() => handleUpload()[type]()}
        icons={[<UploadIcon color={config.colors.white} />]}
      >
        {currentLabel()}
      </Button>
    </View>
  );
};

export default Upload