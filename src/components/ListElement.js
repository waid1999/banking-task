import React from 'react';

const ListElement = ({
    data,
    count
}) => (
    <>
        <div>
            {data.exchangedate}
        </div>
        <div>
            {data.rate}
        </div>
        <div>
            {data.rate * count} UAH
        </div>
    </>
);

export default ListElement;