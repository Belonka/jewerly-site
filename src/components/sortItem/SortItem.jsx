'use client';
import { useState, useEffect } from 'react';
import Card from '../card/Card';

export default function SortItem({items}) {
    const [sortOption, setSortOption] = useState();
    const [sortedItems, setSortedItems] = useState(items);

    useEffect(() => {
        const sorted = [...items].sort((a, b) => {
            if(sortOption === 'lowToHigh') return a.price - b.price;
            if(sortOption === 'highToLow') return b.price - a.price;
            return 0;
        })
        setSortedItems(sorted)
    },[sortOption, items]);

    
  return (
    <>
    <div className='sort-option'>
        <label htmlFor="sort" className='label-sort'>Сортувати за: </label>
        <select 
        value={sortOption} 
        id="sort"
        onChange={(e) => setSortOption(e.target.value)}
        className='sort-list'
        >
            <option value="">Обрати</option>
            <option value="lowToHigh">Ціна: від низької до високої</option>
            <option value="highToLow">Ціна: від високої до низької</option>

        </select>
    </div>
    <ul className='container-card-category'>
        {sortedItems.map((item) => {
            return <Card key={item.id} item={item}/>
        })}
    </ul>
    </>
  )
}
