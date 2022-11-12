import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <section>
      <h1 className="home">Selamat Datang</h1>
      <p>
        Halo Semua , Perkenalkan nama saya Syahroni, saya Mahasiswa Unindra ,
        semoga kalian menikmati websiteku ini, Karena Aku bsru belajar tentang
        programming
      </p>
    </section>
  );
}
