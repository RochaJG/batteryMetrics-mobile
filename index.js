/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Server } from "miragejs";

new Server({
  routes() {
    this.namspace = "api";

    this.get("/devices", () => {
      devices: [
        { id: 1, name: "Xiaomi Mi 9T", batteryCapacity: 4100 },
        { id: 2, name: "Xiaomi Redmi Note 5", batteryCapacity: 4000 },
        { id: 3, name: "iPhone XR", batteryCapacity: 3600 }
      ];
    });
  }
});

AppRegistry.registerComponent(appName, () => App);
