import { ServiceDTO } from "@/types";

interface ServiceSelectProps {
  data: ServiceDTO[];
}
export default function ServiceSelect({ data }: ServiceSelectProps) {
  return <h1>Select {data.length}</h1>;
}
