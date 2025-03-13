import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function Page() {
  const t = useTranslations("hero");
  notFound();
  return <h1>{t("title")}</h1>;
}
