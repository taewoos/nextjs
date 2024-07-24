'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [result, setResult] = useState('');

  useEffect(()=>{
    async function test(){
      try{
        const res = await fetch('/api/db')
  
        console.log(res);
        const result = await res.json();
        setResult(result.data);
      }catch(error){
        console.error('에러', error)
      }
    }

    test();
  }, [])

}
