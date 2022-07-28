import { AppConfig, UserSession, showConnect } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export function authenticate() {
  showConnect({
    appDetails: {
      name: "Auth test",
      icon: window.location.origin + "/my-app-logo.svg",
    },

    onFinish: () => {
      let userData = userSession.loadUserData();
      window.location.replace("/");
    },
    userSession: userSession,
  });
}

// export function getUserData() {
//   return userSession.loadUserData();
// }
