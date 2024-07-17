// hooks/useBarcodeScanner.ts
import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

interface BarcodeScannerResult {
  videoRef: React.RefObject<HTMLVideoElement>;
  barcodeResult: string | null;
}

const useBarcodeScanner = (): BarcodeScannerResult => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [barcodeResult, setBarcodeResult] = useState<string | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    const videoElement = videoRef.current;

    const startScanner = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoElement) {
          videoElement.srcObject = stream;

          codeReader.decodeFromVideoDevice(null, videoElement, (result, err) => {
            if (result) {
              setBarcodeResult(result.getText());
            }
            if (err && !(err instanceof NotFoundException)) {
              console.error(err);
            }
          });
        }
      } catch (error) {
        console.error('Error accessing video stream', error);
      }
    };

    startScanner();

    return () => {
      codeReader.reset();
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream;
        const tracks = stream.getTracks();

        tracks.forEach(track => {
          track.stop();
        });
      }
    };
  }, [videoRef]);

  return { videoRef, barcodeResult };
};

export default useBarcodeScanner;
