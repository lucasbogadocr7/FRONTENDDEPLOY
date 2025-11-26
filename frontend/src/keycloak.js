
import Keycloak from 'keycloak-js';

if (process.env.REACT_APP_DISABLE_AUTH === "true") {
  export const keycloak = {
    init: () => Promise.resolve(true),
    authenticated: true,
    token: "fake-token",
    login: () => {},
    logout: () => {},
  };

  export default keycloak;
}
const keycloakConfig = {
  url: 'http://localhost:8080', 
  realm: 'tp-tienda-sol',        
  clientId: 'frontend-app',     
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
