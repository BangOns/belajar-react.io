import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <section>
      <h1 className="contact">Selamat Datang</h1>
      <p>ini adalah Nomor Ku xxxxxxxxx</p>
    </section>
  );
}
