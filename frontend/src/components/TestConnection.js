import React, { useEffect, useState } from 'react';

const TestConnection = () => {
  const [status, setStatus] = useState('Testing connection...');

  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ai/test');
        const data = await response.json();
        setStatus(`Connection successful: ${JSON.stringify(data)}`);
      } catch (error) {
        setStatus(`Connection failed: ${error.message}`);
      }
    };

    testBackend();
  }, []);

  return (
    <div>
      <h2>Backend Connection Test</h2>
      <p>{status}</p>
    </div>
  );
};

export default TestConnection; 