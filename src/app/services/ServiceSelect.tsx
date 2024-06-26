"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { ServiceDTO } from "@/types";
import { GetAppointments } from "@/services";
import ChevronIcon from "./ChevronIcon";
import styles from "./ServiceSelect.module.css";

interface ServiceSelectProps {
  service: ServiceDTO;
  isOpen: boolean;
  toggle: () => void;
}
export default function ServiceSelect({
  service,
  isOpen,
  toggle,
}: ServiceSelectProps) {
  const { id, name } = service;
  const [available, setAvailable] = useState<any[]>();

  useEffect(() => {
    GetAppointments().then(data => setAvailable(data));
  }, []);

  const arrowClassname = cn(styles.arrow, { [styles.open]: isOpen });

  return (
    <div className={styles.panel} role="listitem" data-testid="service-item">
      <div className={styles.title}>
        <Image
          src={`/${id}.jpg`}
          width={80}
          height={80}
          alt="oil"
          placeholder="empty"
          priority={true}
        />
        <h2 className={styles.label}>{name}</h2>
        <button
          className={arrowClassname}
          onClick={toggle}
          data-testid="service-toggle"
        >
          <ChevronIcon />
        </button>
      </div>
      {isOpen && (
        <div className={styles.book}>
          <h3 className={styles.description}>Available Appointments</h3>
          <div className={styles.items}>
            {!available ? (
              <small>loading...</small>
            ) : (
              available?.map((v, i) => (
                <p
                  key={i}
                  className={styles.item}
                  data-testid="service-appointment"
                >
                  <span className={styles.circle}>&nbsp;</span>
                  <span>{v}</span>
                </p>
              ))
            )}
          </div>
          <button className={styles.action}>Book Now</button>
        </div>
      )}
    </div>
  );
}
