import { Alert } from 'react-native';
import { ScrollView, Image, Box, Text, Divider } from 'native-base';
import Separator from '../components/separator';
import Button from '../components/button';

// Functional Component
const Article = () => {
  // Button Handler
  const buttonHandler = () => {
    Alert.alert("Button Handler");
  };

  return (
    <ScrollView>
      <Box alignItems="center" my={4}>
        <Image
          source={{ uri: 'https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/logo-telkom-university-surabaya-color-300x133.png?lossy=2&strip=1&webp=1' }}
          alt="logo"
          height={24}
          resizeMode="contain"
        />
      </Box>

      <Box px={4} py={5} bg="gray.100">
        <Text fontSize="2xl" fontWeight="bold" lineHeight={32}>
          Solusi Inovatif Penurunan Angka Stunting, Mahasiswa Telkom University
          Sabet Penghargaan di Innovillage 2023
        </Text>
      </Box>

      <Box p={4}>
        <Image
          source={{ uri: 'https://b3338070.smushcdn.com/3338070/wp-content/uploads/2024/03/Innovillage-2023-1200x600.jpeg?lossy=2&strip=1&webp=1' }}
          alt="main"
          height={56}
          resizeMode="contain"
          borderRadius={10}
        />

        <Separator height={10} />

        <Text>
          <Text fontWeight="bold">Surabaya, Maret 2024</Text> – Gelombang
          kebanggaan kembali datang bagi Telkom University Surabaya, tim
          mahasiswa Telkom University Surabaya yang menamakan diri mereka
          Connect Care Pediatrics berhasil meraih prestasi gemilang dalam
          kompetisi Innovillage 2023 yang diumumkan pada tanggal 09 Maret 2024,
          bertempat di Auditorium Gedung Damar, Telkom University. Sebuah
          kompetisi sosial project bergengsi ini diselenggarakan untuk mewadahi
          mahasiswa dalam melakukan kegiatan sosial di tengah-tengah masyarakat
          yang dapat mengatasi permasalahan yang dihadapi. Innovillage yang
          telah memasuki tahun ketiga ini mengangkat tema “Empowering Young
          Sociopreneur for National Development.”
        </Text>

        <Separator height={10} />

        <Text>
          Melalui inovasi proyek berjudul “Pembuatan IoT dan Perancangan Website
          'Connect Pediatrics' Untuk Monitoring Kesehatan Balita pada Posyandu,”
          tim yang digawangi oleh Rendy Adi Fatma Saputra, Daffa Fakhuddin
          Arrozy, dan Johanes Abner Sebastian, bersama dengan dosen pembimbing
          Eka Sari Oktarina, S.Kom., M.Eng., berhasil menciptakan inovasi luar
          biasa yang mendukung tujuan pembangunan berkelanjutan dan
          mengantarkan mereka meraih predikat “Best Stunting Reduction
          Solution.”
        </Text>

        <Separator height={10} />

        <Text>
          “Proyek ini fokus pada penurunan angka stunting dengan menghadirkan
          solusi inovatif berupa alat IoT yang terintegrasi dengan website. Alat
          ini tidak hanya mengukur berat badan dan tinggi badan balita, tetapi
          juga merekam data secara otomatis ke dalam database yang dapat
          diakses oleh orang tua. Informasi ini juga mempermudah pekerjaan
          bidan di Posyandu dalam penginputan data ke EPPGBM,” jelas Rendy.
        </Text>

        <Separator height={10} />

        <Text>
          Sementara itu, anggota tim lainnya berbagi pengalaman yang menurutnya
          berkesan selama menjalankan proyek, “Program Innovillage ini seru dan
          memotivasi. Kami banyak keluar dari zona nyaman, menerapkan materi
          kuliah ke dalam kehidupan nyata masyarakat,” ujar Daffa. Di tempat yang
          sama Johanes menambahkan, “Kami belajar bagaimana berinteraksi dengan
          masyarakat yang jarang terpapar teknologi, serta melihat permasalahan
          dari sudut pandang baru.”
        </Text>

        <Separator height={10} />

        <Text>
          Keberhasilan tim mahasiswa Connect Care Pediatrics ini bukan hanya
          sekadar pencapaian dalam sebuah kompetisi, melainkan bukti nyata
          kemampuan mereka dalam menerapkan pengetahuan dan keterampilan untuk
          memecahkan permasalahan sehari-hari. Prestasi ini diharapkan menjadi
          sumber inspirasi bagi mahasiswa lainnya untuk mengambil risiko,
          menerapkan ilmu yang mereka pelajari, dan menjadi agen perubahan dalam
          membangun bangsa.
        </Text>

        <Separator height={10} />

        <Text>
          Detail menarik dari proyek Innovillage ini bisa langsung dilihat di
          Instagram <Text fontWeight="bold">connectcare.pediatrics</Text>
        </Text>

  <Separator height={10} />
  <Text fontWeight="bold">Surabaya, Maret 2024</Text>

  <Separator height={10} />
  <Box bg="gray.400" height={1} />

        <Separator height={20} />
        <Button text="Share" onPress={buttonHandler} />
        <Separator height={70} />
      </Box>
    </ScrollView>
  );
};
export default Article;
