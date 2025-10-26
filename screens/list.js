import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Box,
  Image,
  Text,
  Pressable,
  Modal,
  View,
  Button,
} from "@gluestack-ui/themed";

// Dummy Data (Array of Objects)
const datas = [
  {
    id: 1,
    title:
      "Telkom Indonesia Gelar Acara Site Visit Implementasi Digital Culture di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/telkom-indonesia-7g41cvdgogl9rhsj4xajruxo4gwvtple82g3pv6nyhc.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 2,
    title: "Tel-U Surabaya Gelar Sosialisasi Bandung Techno Park",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/kekayaan-intelektual-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 3,
    title:
      "Soft Launching dan Pengenalan Laboratorium Motion di Telkom University Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/08/motion-capture-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 4,
    title:
      "Tingkatkan Kualitas Pengelolaan Jurnal Ilmiah: Telkom University Surabaya Gelar Workshop Migrasi Web Jurnal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/05/workshop-migrasi-web-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 5,
    title:
      "Menggali Potensi Desa: Telkom University Surabaya Mendukung UMKM di Tambak Kalisogo",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Telkom-University-Surabaya-2-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <Box px="$4" py="$4" borderBottomWidth={1} borderColor="$borderLight300">
      <Pressable
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Image
          source={{ uri: item.image }}
          alt={item.title}
          w="100%"
          h={200}
          rounded="$lg"
        />
        <Text mt="$2" fontSize="$lg" fontWeight="600">
          {item.title}
        </Text>
      </Pressable>
    </Box>
  );

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Backdrop />
        <Modal.Content p="$5" rounded="$2xl" bg="$backgroundLight0">
          <Modal.CloseButton />
          <Modal.Header>
            <Text
              fontSize="$lg"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
            >
              {selectedItem?.title}
            </Text>
          </Modal.Header>
          <Modal.Footer justifyContent="center">
            <Button
              bg="$red700"
              rounded="$lg"
              onPress={() => setModalVisible(false)}
            >
              <Button.Text>TUTUP</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default List;
