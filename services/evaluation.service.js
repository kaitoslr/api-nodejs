import {performance} from 'node:perf_hooks';
import fetch from 'node-fetch';

const endpointsToTest = [
    'http://localhost:3000/superusers',
    'http://localhost:3000/analytics/top-countries',
    'http://localhost:3000/analytics/team-insights',
    'http://localhost:3000/analytics/active-users-per-day'
  ];
  
const evaluateEndpoints = async (req, res) => {
    const results = [];
    
    for (const url of endpointsToTest) {
      console.log(`Testando: ${url}`);
      const start = performance.now();
      try {
        const response = await fetch(url);
        const time = performance.now() - start;
        console.log(`Sucesso: ${url}`);
        let jsonValid = true;
        try {
          await response.clone().json();
        } catch (err) {
          jsonValid = false;
          console.log(`Erro ao testar: ${url} - ${err.message}`);
        }
  
        results.push({
          endpoint: url,
          status: response.status,
          success: response.status === 200,
          response_time_ms: Math.round(time),
          valid_json: jsonValid,
        });
      } catch (err) {
        results.push({
          endpoint: url,
          status: "error",
          success: false,
          response_time_ms: 0,
          valid_json: false,
          error: err.message,
        });
      }
    }
   return results
  };

export default {evaluateEndpoints};