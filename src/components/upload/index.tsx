import React, { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ContextTheme } from "../../provider";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Alert, View } from "react-native";
import Button from "../button";
import { UploadIcon } from "lucide-react-native";

export interface UploadProps {
  type?: 'file' | 'image' | 'photo'
  label?: string
}

export const Upload = ({ type = 'image', label, ...props }: PropsWithChildren<UploadProps>): JSX.Element => {
  const config = useContext(ContextTheme);
  const [permissionCamera, setPermissionCamera] = useState<boolean>(false);
  const [permissionImage, setPermissionImage] = useState<boolean>(false);
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

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
      (type === 'image' && await getGalleryPermission());
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
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.6,
          exif: false,
        });
        if (!result.canceled && result.assets[0]) {
          setImage(result.assets[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result)
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
          setImage(result.assets[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const currentLabel = () => {
    if (label) return label

    const labels = {
      image: 'Adicionar imagem',
      file: 'Adicionar arquivo',
      photo: 'Tirar foto'
    }

    return labels[type]
  }

  const handleUpload = () => {
    return {
      image: pickImage,
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