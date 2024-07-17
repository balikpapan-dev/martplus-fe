"use client";

import useBarcodeScanner from '../hooks/useBarcodeScanner';

const BarcodeScanner = () => {
  const { videoRef, barcodeResult } = useBarcodeScanner();

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <video ref={videoRef} style={{ width: '100%' }} />
      {barcodeResult && (
        <div>
          <h2>Scanned Barcode:</h2>
          <p>{barcodeResult}</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
