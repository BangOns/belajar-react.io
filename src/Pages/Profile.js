import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <section>
      <h1 className="profile">This My Profile</h1>
      <p>
        Halo Nama Ku Syahroni, saya Mahasiswa Unindra , semoga kalian menikmati
        websiteku ini, Karena Aku bsru belajar tentang programming
      </p>
    </section>
  );
}
