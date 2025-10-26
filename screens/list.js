import { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Box, Image, Text, Pressable } from 'native-base';

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
  {
    id: 6,
    title:
      "Telkom University Surabaya Hadirkan Inovasi Pengganti Bantalan Roda Semi Otonom Tank Leopard berbasis Electric Forklift Khusus untuk Penguatan Alutsista TNI",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/bfi_thumb/tank-leopard-7dnkdoqfkgh7et7l6q0j1odu6ovt6cavmgnig3e1368.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 7,
    title: "Sosialisasi PKM 2024 Bersama Tim Pemenangan Tel-U Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/02/pkm-2024-1-1200x600.jpeg?lossy=2&strip=1&webp=1",
  },
  {
    id: 8,
    title:
      "Transformasi Digital Al-Barra Studio Melalui Pembuatan Website oleh Institut Teknologi Telkom Surabaya",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2023/11/transformasi-digital.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 9,
    title:
      "Program Pengabdian Masyarakat Telkom University Surabaya Bantu UMKM Desa Panjunan Go Digital dan Raih Pasar Internasional",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/09/umkm-go-digital-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
  {
    id: 10,
    title:
      "Workshop Social Media Marketing dari INDIBIZ Memberdayakan Pedagang Lokal",
    image:
      "https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/07/social-media-marketing-1-1200x600.jpg?lossy=2&strip=1&webp=1",
  },
];

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <Box px={4} py={4} borderBottomWidth={1} borderColor="gray.200">
      <Pressable onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
        <Image source={{ uri: item.image }} alt={item.title} width="100%" height={52} />
        <Text mt={2} fontSize="lg">{item.title}</Text>
      </Pressable>
    </Box>
  );

  return (
    <View>
      <FlatList data={datas} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <Box flex={1} bg="rgba(0,0,0,0.5)" justifyContent="center" alignItems="center">
          <Box bg="white" rounded="lg" p={5} width="85%" alignItems="center">
            {selectedItem && (
              <Text fontSize="lg" fontWeight="bold" textTransform="uppercase" mb={4} textAlign="center">
                {selectedItem.title}
              </Text>
            )}
            <Pressable bg="red.700" p={2} rounded="lg" onPress={() => setModalVisible(false)}>
              <Text color="white" fontWeight="bold">TUTUP</Text>
            </Pressable>
          </Box>
        </Box>
      </Modal>
    </View>
  );
};

export default List;