import ServiceSelect from "./ServiceSelect";
import { GetServices } from "@/services";
import styles from "./page.module.css";

async function ServicesPage() {
  try {
    let data = await GetServices();
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>Select a Service</h1>
        <ServiceSelect data={data} />
      </div>
    );
  } catch (e) {
    return "Error loading";
  }
}

export default ServicesPage;
