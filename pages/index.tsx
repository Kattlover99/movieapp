import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ movies }) {
  return (
    <div>
      <h1>The Most Popular Films</h1>
      <div className="popular">

        {movies.results.map((movie) => (
          <div>
            <h3>{movie.title}</h3>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              alt=""
            />
          </div>
        ))}

        <style jsx>{`
          .popular {
            display: flex;
            flex-wrap: wrap;
            width: 1000px;
            margin: 0 600px;
            gap:10px;
            padding:20px;
            
          }
          .popular>div{
            width:25%;
            position:relative;
            width:calc(25%-10px);
          }
          .popular>div>h3{
            position:absolute;
            bottom:0;
            left:0;
            font-size:20px;
            width:100%;
            color:#ffff;
            padding:50px 20px 20px 20px;

          }
          .popular>div>img{
            width:100%;
          }
        `}</style>
      </div>
    </div>
  );
}

//list popular movies
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use your own API key
  const request = await fetch(
    " https://api.themoviedb.org/3/movie/popular?api_key=32f7c7b9f71027c01ab2c5910e5be9c9&language=en-US&page=1"
  );
  const movies = await request.json();
  return {
    props: {
      movies,
    },
  };
}
