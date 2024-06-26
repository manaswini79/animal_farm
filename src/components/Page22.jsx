import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page22 = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/Page23');
  };

  return (
    <div>
      <h1>Page 22</h1>
      <button onClick={goToNextPage}>Go to Page 23</button>
    </div>
  );
};

export default Page22;