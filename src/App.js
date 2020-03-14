import React, {useEffect, useState} from 'react';
import './App.css';

import Header from './components/Header';
import Filter from './components/FilterComponent';
import DogCard from './components/DogCards';

import { getDogList } from './services';
import { getLocalStorageItem, setLocalStorageItem } from "./utils";

function App() {
    const [filterWord, setFilterWord] = useState('');
    const [dogList, setDogList] = useState([]);
    const [AllList, setAllList] = useState([]);
    useEffect(() => {
        const list = getLocalStorageItem('dogs');
        if (list && list.length) {
            setDogList(list);
            setAllList(list);
            return;
        };
        getDogList().then(list => {
            setDogList(list);
            setAllList(list);
            setLocalStorageItem('dogs', list);
        });
    }, []);
    useEffect(() => {
        const list = AllList.filter(item => item[0].includes(filterWord));
        setDogList(list);
    }, [ AllList, filterWord ]);
  return (
    <div className="App">
      <Header />
      <Filter onChange={setFilterWord} filterWord={filterWord} />
      <div className="cardContainer">
          {
              dogList.map(item => <DogCard key={item[0]} img={item[1][0]} desc={item[0]}/>)
          }
      </div>
    </div>
  );
}

export default App;
