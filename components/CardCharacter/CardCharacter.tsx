//Dependencies
import React, { useState } from "react";
import Link from "next/link";
//Assets
import style from "./styles.module.scss";

const CardCharacter = (props): JSX.Element => {
  useState(() => {
    console.log(props);
  });

  const getFormattedDate = (date) => {
    let modificacion = new Date(date);
    let month: any = modificacion.getMonth() + 1;
    let day: any = modificacion.getDate();
    day = ("0" + day).slice(-2);
    month = ("0" + month).slice(-2);
    let year = modificacion.getFullYear();
    return month + "/" + day + "/" + year;
  };

  return props.characters.map((character) => (
    <div className={style.card} key={character.id}>
      <div className={style.image}>
        <img src={character.image} alt="character" />
      </div>
      <div className={style.info}>
        <div className={style.info_name}>
          <p>{character.name}</p>
        </div>
        <div className={style.info_body}>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Status:</p>
            <p className={style.fild_body}>{character.status}</p>
          </div>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Gender:</p>
            <p className={style.fild_body}>{character.gender}</p>
          </div>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Specie:</p>
            <p className={style.fild_body}>{character.species}</p>
          </div>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Created in:</p>
            <p className={style.fild_body}>
              {getFormattedDate(character.created)}
            </p>
          </div>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Origin:</p>
            <p className={style.fild_body}>
              <Link href="/blog/hello-world">
                <a>{character.origin.name}</a>
              </Link>
            </p>
          </div>
          <div className={style.body_fild}>
            <p className={style.fild_title}>Location:</p>
            <p className={style.fild_body}>
              <Link href="/blog/hello-world">
                <a>{character.location.name}</a>
              </Link>
            </p>
          </div>
        </div>
        <button className={style.info_button}>
          <Link href={`/character/${character.id}`}>
            <a className={style.button_link}>Show More</a>
          </Link>
        </button>
      </div>
    </div>
  ));
};

export default CardCharacter;
