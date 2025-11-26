
import Keycloak from 'keycloak-js';

let keycloak;

if (process.env.REACT_APP_DISABLE_AUTH === "true") {
  keycloak = {
    init: () => Promise.resolve(true),
    authenticated: true,
    token: "fake-token"
  };
} else {
  const Keycloak = require("keycloak-js").default;
  keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "myrealm",
    clientId: "myclient",
  });
}

export default keycloak;
}
const keycloakConfig = {
  url: 'http://localhost:8080', 
  realm: 'tp-tienda-sol',        
  clientId: 'frontend-app',     
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
