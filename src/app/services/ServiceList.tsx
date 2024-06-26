"use client";
import { useState } from "react";
import { ServiceDTO } from "@/types";
import ServiceSelect from "./ServiceSelect";
import styles from "./ServiceList.module.css";

interface ServiceListProps {
  services: ServiceDTO[];
}

export default function ServiceList({ services }: ServiceListProps) {
  const [opens, setOpens] = useState<string[]>(["oil"]);
  const isOpen = (s: string) => opens.includes(s);
  const toggle = (s: string) => () => {
    if (opens.includes(s)) {
      setOpens(v => v.filter(v => v !== s));
    } else {
      setOpens(v => [...opens, s]);
    }
  };

  return (
    <div className={styles.list}>
      {services.map((s: ServiceDTO, i) => (
        <ServiceSelect
          key={s.id}
          service={s}
          isOpen={isOpen(s.id)}
          toggle={toggle(s.id)}
        />
      ))}
    </div>
  );
}
