import axios from 'axios';
import https from 'https';
import crypto from 'crypto';

export const api = axios.create({
  // Necessario para consumir a api do IBGE
  httpsAgent: new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
  })
});
