import { GetServices } from "@/services";
import { ServiceDTO } from "@/types";
import ServiceSelect from "./ServiceSelect";
import styles from "./page.module.css";

async function ServicesPage() {
  try {
    let data = await GetServices();
    return (
      <div className={styles.content}>
        <h1 className={styles.title}>Select a Service</h1>
        <div className={styles.list}>
          {data.map((s: ServiceDTO) => (
            <ServiceSelect key={s.id} service={s} />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return "Error loading";
  }
}

export default ServicesPage;
