import React, {useEffect, useState} from 'react';
import Button from '../components/Button';
import './home.css';
import '../components/button.css'

function Home() {

  const [data, setData] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  useEffect(() => {
    const senha = JSON.parse(localStorage.getItem('disable'))
    if (senha === true){
     setValid(true)
    }
  },[])

  function save(){
    localStorage.setItem('data', JSON.stringify(data))
    localStorage.setItem('disable', true)
    console.log(valid)
  }

  return (
    <div className='mainCont'>
      <Button
      className='buttonReq'
      link={'/registros'}
      name={'Requisição'}
      onClick={save}
      disabled={valid}
      />
      <Button
      className='button'
      link={'/registros'}
      name={'Registros'}
      />
    </div>
  );
}

export default Home;