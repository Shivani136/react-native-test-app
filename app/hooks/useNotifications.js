import { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if (notificationListener)
      Notifications.addPushTokenListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error Getting in Push Notification", error);
    }
  };
};
