'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src="/logo.png" alt="Carbonomy Logo" width={150} height={50} />
      </div>
      <div className={styles.content}>
        <h1>탄소가 곧 비용인 시대,</h1>
        <h2>SCOPE3 산정은 물론 감축 방안까지</h2>
        <p>AI기반 탄소회계 솔루션, 카보노미</p>
        <p className={styles.comingSoon}>Coming Soon</p>
      </div>

      <div className={styles.footer}>
        <p>http://carbonomy.net</p>
        <p>hugh.park@samoo.com</p>
        <p>서울특별시 강동구 천호대로 1077 이스트센트럴타워</p>
      </div>
    </div>
  );
}