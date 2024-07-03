import { Banner } from "components/Banner";
import { Titulo } from "components/Titulo";
import { Card } from "components/Card";
import videos from 'json/db.json';
import styles  from "./Inicio.module.css";

export function Inicio() {
  return (
    <>

      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => { //aplica uma função a cada item do array e retorna um novo array
          return <Card {...video} key={video.id} />; // o operador spread (...) está sendo usado para passar todas as propriedades do objeto video como props individuais para o componente Card. Isso é conhecido como desestruturação com o operador spread.
        })}
      </section>
      
    </>
  );
}
