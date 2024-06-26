"use client";
import { useEffect, useState } from "react";
import { ServiceDTO } from "@/types";
import { GetAppointments } from "@/services";
import ChevronIcon from "./ChevronIcon";
import styles from "./ServiceSelect.module.css";

interface ServiceSelectProps {
  service: ServiceDTO;
}
export default function Services({ service }: ServiceSelectProps) {
  const { id, name } = service;
  const [available, setAvailable] = useState<any[]>();

  useEffect(() => {
    GetAppointments().then(data => setAvailable(data));
  }, []);

  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <div>pic-{id}</div>
        <h2 className={styles.label}>{name}</h2>
        <span className={styles.arrow}>
          <ChevronIcon />
        </span>
      </div>
      <div className={styles.book}>
        <h3 className={styles.description}>Available Appointments</h3>
        <div className={styles.items}>
          {available?.map((v, i) => (
            <p key={i} className={styles.item}>
              {v}
            </p>
          ))}
        </div>
        <button className={styles.action}>Book Now</button>
      </div>
    </div>
  );
}
