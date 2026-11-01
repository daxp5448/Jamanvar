export const APPLICATIONS = [
  {
    id: "kiosk",
    name: "JAMANVAAR Kiosk",
    shortName: "Kiosk",
    description:
      "Self-service ordering application that allows customers to browse menus, customize dishes and place orders directly from a kiosk.",
    platform: "Windows",
    version: "v1.0.8",
    installer: "JAMANVAAR-Kiosk-Setup.exe",
    downloadLabel: "Download Kiosk",
    downloadUrl:
      "https://github.com/kelviontech-solution/jamanvaar-ci/releases/download/v1.0.8-unsigned-local/JAMANVAAR-Kiosk-Setup.exe",
  },
  {
    id: "pos",
    name: "JAMANVAAR POS",
    shortName: "POS",
    description:
      "Fast and reliable restaurant billing application for handling orders, payments and everyday counter operations.",
    platform: "Windows",
    version: "v1.0.8",
    installer: "JAMANVAAR-POS-Setup.exe",
    downloadLabel: "Download POS",
    downloadUrl:
      "https://github.com/kelviontech-solution/jamanvaar-ci/releases/download/v1.0.8-unsigned-local/JAMANVAAR-POS-Setup.exe",
  },
  {
    id: "restaurant-admin",
    name: "JAMANVAAR Restaurant Admin",
    shortName: "Restaurant Admin",
    description:
      "Manage your restaurant operations, menu, orders, staff and business settings through the dedicated administration application.",
    platform: "Windows",
    version: "v1.0.8",
    installer: "JAMANVAAR-POS-Admin-Setup.exe",
    downloadLabel: "Download Restaurant Admin",
    downloadUrl:
      "https://github.com/kelviontech-solution/jamanvaar-ci/releases/download/v1.0.8-unsigned-local/JAMANVAAR-POS-Admin-Setup.exe",
  },
  {
    id: "captain",
    name: "JAMANVAAR Captain",
    shortName: "Captain",
    description:
      "A dedicated application for restaurant captains to manage tables, take customer orders and coordinate service operations.",
    platform: "Windows",
    version: "v1.0.8",
    installer: "JAMANVAAR-Captain-Setup.exe",
    downloadLabel: "Download Captain",
    downloadUrl:
      "https://github.com/kelviontech-solution/jamanvaar-ci/releases/download/v1.0.8-unsigned-local/JAMANVAAR-Captain-Setup.exe",
  },
  {
    id: "kds",
    name: "JAMANVAAR KDS",
    shortName: "KDS",
    description:
      "Kitchen Display System for managing incoming orders, monitoring preparation progress and coordinating kitchen operations.",
    platform: "Windows",
    version: "v1.0.8",
    installer: "JAMANVAAR-KDS-Setup.exe",
    downloadLabel: "Download KDS",
    downloadUrl:
      "https://github.com/kelviontech-solution/jamanvaar-ci/releases/download/v1.0.8-unsigned-local/JAMANVAAR-KDS-Setup.exe",
  },
] as const;

export type ApplicationId = (typeof APPLICATIONS)[number]["id"];
