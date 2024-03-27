import React, { useEffect, useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import ViewPdf from 'react-native-view-pdf';
import RNFS from 'react-native-fs';

export const ModalPdf = ({ item, setItem }) => {
  const [pdfPath, setPdfPath] = useState(null);

  useEffect(() => {
    const handlePDF = async () => {
      if (item) {
        try {
          const pdfData = await RNFS.readFile(item, 'base64');
          const pdfPath = `${RNFS.DocumentDirectoryPath}/temp.pdf`;
          await RNFS.writeFile(pdfPath, pdfData, 'base64');
          setPdfPath(pdfPath);
        } catch (error) {
          console.error('Error reading PDF:', error);
        }
      }
    };

    handlePDF();
  }, [item]);

  const handleCloseModal = () => {
    // Hapus file PDF sementara jika ada
    if (pdfPath) {
      RNFS.unlink(pdfPath)
        .then(() => {
          console.log('Temporary PDF file deleted:', pdfPath);
        })
        .catch(error => {
          console.error('Error deleting temporary PDF file:', error);
        });
    }

    // Tutup modal
    setItem('');
  };

  return (
    <Modal transparent visible={!!item} onRequestClose={handleCloseModal}>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onPress={handleCloseModal}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
          {pdfPath ? (
            <ViewPdf
              style={{ flex: 1 }}
              resource={pdfPath} // Menggunakan path langsung dari `react-native-fs`
              onLoad={() => console.log('PDF loaded successfully')}
              onError={error => console.error('Error loading PDF:', error)}
            />
          ) : (
            <Text>Loading PDF...</Text>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};




// import React, { useEffect, useState } from 'react';
// import { View, Modal, TouchableOpacity, Image } from 'react-native';
// import { ViewPdf } from 'react-native-view-pdf';
// import RNFS from 'react-native-fs';

// export const ModalPdf = ({ item, setItem }) => {
//   console.log('pdf', item);
//   const [item2, setItem2] = useState('');

//   const Show = () => {
//     return !!item;
//   };

//   const handle = async () => {
//     try {
//       const data = await RNFS.readFile(item, 'base64');
//       setItem2('data:application/pdf;base64,' + data);
//       console.log('pdf', 'data:application/pdf;base64,' + data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     handle();
//   }, [item]);

//   return (
//     <Modal transparent visible={Show()} onRequestClose={() => setItem('')}>
//       <TouchableOpacity
//         style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
//         onPress={() => setItem('')}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ViewPdf
//             resource={{ uri: item2 }}
//             style={{ flex: 1, width: '100%' }}
//           />
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   );
// };
