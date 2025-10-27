import { defineRouting } from "next-intl/routing";

export const routing=defineRouting({
    locales:['en','gu'],
    defaultLocale:'en',
     pathnames: {
    "/": "/",
    "/valuate": "/valuate"
  }
})