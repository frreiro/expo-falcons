import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

import { PDFInfo } from '..';

export default async function pdfAndroid(pdf: PDFInfo) {
  const localPath = `${FileSystem.cacheDirectory}${pdf.name}`;
  try {
    const fileInfo = await FileSystem.getInfoAsync(localPath);
    let fileData: FileSystem.FileInfo | FileSystem.FileSystemDownloadResult =
      fileInfo;
    if (!fileInfo.exists) {
      try {
        const response = await FileSystem.downloadAsync(
          pdf.remoteURL,
          localPath,
        );
        fileData = response;
      } catch (error) {
        console.log(error);
      }
    }

    const content = await FileSystem.getContentUriAsync(fileData.uri);
    await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
      data: content,
      flags: 1,
      type: 'application/pdf',
    });
  } catch (e) {
    console.log('[ERROR] PDFAndroid', JSON.stringify(e));
  }
}
