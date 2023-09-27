import React from 'react';
import PhonesCard from './PhonesCard';

const Phones = ({phones}) => {

  // console.log(phones)

  return (
    <div>
      <h1 className=' text-center text-xl font-bold py-4'>All Categories Phones</h1>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
        }
      </div>

    </div>
  );
};

export default Phones;<h1>All Categories Phones</h1>