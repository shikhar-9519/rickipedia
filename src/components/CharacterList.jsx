import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import "../styles/characterlist.css";
import { BeatLoader } from "react-spinners";

export default function CharacterList(props) {
  const {filters} = props;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const [scrollApiHit, setScrollApiHit] = useState(false);
  const [noData, setNoData] = useState(false);

  const mounted = useRef(null);

  useEffect(() => {
    if(!totalCount || list.length < totalCount)
        getData();
  }, [page]);

  useEffect(()=>{
    if(!mounted.current){
      mounted.current = true;
    }
    else if(!list?.length){
      if(page === 1){
        getData();
      }
      else
        setPage(1);
    }
  },[list])

  useEffect(()=>{
    setTotalCount(null);
    setList([]);
  },[JSON.stringify(filters)])

  const handleScroll =() => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight-20 && !scrollApiHit){
        setPage(prev=>prev+1);
        setScrollApiHit(true);
    }
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
}, [])

const getQueryParam = () => {
  let str = '';
  Object.keys(filters).forEach(key=>{
    if(filters[key]){
      str+=`&${key}=${filters[key]}`
    }
  })
  return str;
}

  const getData = async () => {
    setLoading(true);
    try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${getQueryParam()}`
    );
    const responseJson = await response.json();
    setTotalCount(responseJson.info.count);
    setList([...list, ...responseJson.results]);
  } catch(error){
    console.error("Failed to fetch data:", error);
    setNoData(true);
  } finally {
    setLoading(false);
    setScrollApiHit(false);
  }
  };

  return (
    <div className="character-list-loader"><div className="character-list-container">
      {list.map((li) => (
        <ProfileCard key={li.id} data={li} />
      ))}
      
    </div>{loading ? <div className="loading-container"><BeatLoader
        color={"grey"}
        loading={loading}
        size={50}
        aria-label="Loading..."
        data-testid="loader"
      />
      </div> : null}
      {totalCount && totalCount === list.length ? <h2>Yay! You have gone through all characters.</h2> : null}
      {noData ? <h2>No Data found! Please change  the filters.</h2> : null}
      </div>
  );
}
