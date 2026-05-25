import { redirect } from "next/navigation";

export const metadata = {
  title: "Web Services | Alpath",
};

export default function LegacyWebServicesPage() {
  redirect("/services/web-services");
}