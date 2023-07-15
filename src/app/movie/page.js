import Link from 'next/link'
import styles from "@/app/styles/common.module.css"
import MovieCard from "@/app/components/MovieCard";
import React from 'react'

const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1228f524bcmshf3a98e6bd3fcf6ep129506jsna8380b672b23',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;



  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>{
            main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />
            })
          }
          </div>

        </div>
      </section>
    </>

  )
}

export default page