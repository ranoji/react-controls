import { toPng } from 'html-to-image';
import download from 'downloadjs';
import React, { useRef } from 'react';

const MyComponent = () => {
  const captureRef = useRef();

  const handleCapture = async () => {
    const node = captureRef.current;

    const dataUrl = await toPng(node, {
      cacheBust: true,
      // This is the key: retain the scroll position by setting "width" and "height"
      width: node.offsetWidth,
      height: node.offsetHeight,
      style: {
        transform: 'none', // prevent unwanted resets
      },
    });

    download(dataUrl, 'capture.png');
  };

  return (
    <div>
      <button onClick={handleCapture}>Save as Image</button>

      <div
        ref={captureRef}
        style={{
          height: '400px',
          overflowY: 'auto',
          border: '1px solid black',
        }}
      >
        {/* Virtualized or regular list */}
        {[...Array(1000)].map((_, i) => (
          <div
            key={i}
            style={{
              height: 40,
              borderBottom: '1px solid #ccc',
              padding: '8px',
            }}
          >
            Row #{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
