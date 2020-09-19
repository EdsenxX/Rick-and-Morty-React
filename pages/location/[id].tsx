//Dependencies
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Axios, { AxiosResponse } from "axios";
//Components
import Header from "@components/Header/header";
import CardCharacter from "@components/CardCharacter/CardCharacter";
//Assets
import styles from "./location.module.scss";

function Location(props) {
  const router = useRouter();
  const { id } = router.query;

  let [location, setLocation] = useState([]);
  let [residents, setResidents] = useState([]);
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log(props);
    getLocation();
    getResidents();
  }, []);

  const getLocation = () => {
    console.log(id);
    Axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(async (response: AxiosResponse) => {
        console.log(response.data);
        await setLocation(response.data);
        await setResidents(response.data.residents);
      })
      .catch((error) => {
        setLocation([]);
        console.log(error);
      });
  };

  const getResidents = () => {
    console.log("Soy el get residents");
    for (let index = 0; index < residents.length; index++) {
      const url = residents[index];
      Axios.get(url)
        .then((response: AxiosResponse) => {
          console.log(response.data);
          setCharacters([...characters, response.data]);
        })
        .then((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={styles.location}>
      <Header />
      <div className={styles.location_content}>
        {characters.map((character) => (
          <CardCharacter characters={character} />
        ))}
      </div>
    </div>
  );
}

export default Location;
