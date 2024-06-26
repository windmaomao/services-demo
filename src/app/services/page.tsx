import { GetServices } from "@/services";
import ServiceList from "./ServiceList";
import styles from "./page.module.css";

async function ServicesPage() {
  try {
    let data = await GetServices();
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>Select a Service</h1>
        <ServiceList services={data} />
      </div>
    );
  } catch (e) {
    return "Error loading";
  }
}

export default ServicesPage;
