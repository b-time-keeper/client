import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.timekeeper.app",
  appName: "time-keeper",
  webDir: "out",
  server: {
    url: "http://192.168.1.35:3000/",
  },
};

export default config;
