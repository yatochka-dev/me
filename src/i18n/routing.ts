import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { z } from "zod";

export const ZLocale = z.enum(["en", "he", "ru"]);

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "he", "ru"],

  // Used when no locale matches
  defaultLocale: "he",
});
