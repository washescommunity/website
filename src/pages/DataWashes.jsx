import { useEffect } from 'react';

const DataWashes = () => {
  useEffect(() => {
    window.location.href = "https://datawashes.pythonanywhere.com";
  }, []);

  return (
    <div>
      <h1>Redirecionando para DataWashes...</h1>
    </div>
  );
};

export default DataWashes;
