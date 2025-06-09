'use client';
import { useState, useMemo } from 'react';
import Card from '../card/Card';

export default function SortItem({items}) {
    const [sortOption, setSortOption] = useState();

    const sortedItems = useMemo(() => {
        const sorted = [...items];
        if (sortOption === "lowToHigh") {
          sorted.sort((a, b) => a.price - b.price);
        } else if (sortOption === "highToLow") {
          sorted.sort((a, b) => b.price - a.price);
        }
        return sorted;
      }, [items, sortOption]);

      const handleSortChange = (e) => {
        setSortOption(e.target.value);
      };
    
    
  return (
    <>
    <div className='sort-option'>
        <label htmlFor="sort" className='label-sort'>Сортувати за: </label>
        <select 
        value={sortOption} 
        id="sort"
        onChange={handleSortChange}
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
