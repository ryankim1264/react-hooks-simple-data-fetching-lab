import React, { useEffect, useState } from 'react';

function App () {
  const [randomDog, setRandomDog] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomDog(data.message); // 'message' holds the image URL
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img alt="A Random Dog" src={randomDog} />
    </div>
  );
}

export default App;