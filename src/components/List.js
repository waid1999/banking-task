import React from 'react';
import ListElement from './ListElement'

const List = ({
    count,
    data
}) => (
    <div>{data.map((item, index) => (
        <ListElement data={item} count={count} key={`id-list-${index}`}/>
    ))}</div>
);

export default List;