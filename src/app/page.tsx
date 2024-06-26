import Link from "next/link";
import Image from "next/image";
import servicePic from "../../public/services.jpg";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome to Lithia Motors Service!</h1>
      <Image
        src={servicePic}
        alt="Services"
        placeholder="blur"
        priority={false}
        width={460}
        height={328}
      />
      <p className={styles.description}>
        Lithia motors wants to put you in full control of your car-owning
        experience by providing eat to book service appointments from the
        comfort of your own home!
      </p>
      <button className={styles.action}>
        <Link href="/services">Get Started</Link>
      </button>
    </div>
  );
}
