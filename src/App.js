import React, { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(null);

  const handleSequentialProcessing = async () => {
    try {
        const response = await fetch('https://sorting-api-73tg.onrender.com/process-single', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to_sort: [[3,2,1], [4, 5, 6], [8,7, 9]],
            }),
        });

        const data = await response.json();
        setResult(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


  const handleConcurrentProcessing = async () => {
    try {
      const response = await fetch('https://sorting-api-73tg.onrender.com/process-concurrent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to_sort: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSequentialProcessing}>Process Sequentially</button>
      <button onClick={handleConcurrentProcessing}>Process Concurrently</button>

      {result && (
        <div>
          <h2>Sorted Arrays:</h2>
          <pre>{JSON.stringify(result.sorted_arrays, null, 2)}</pre>
          <p>Time taken: {result.time_ns} nanoseconds</p>
        </div>
      )}
    </div>
  );
};

export default App;
