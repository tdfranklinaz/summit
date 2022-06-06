const express = require('express');
const os = require('node:os');
const app = express();

const cors = require('cors');
app.use(cors());

/**
 * information about the host system
 * to be displayed in the user panel
 */
function updateCurrentSystem() {
  // memory
  let total_mem = os.totalmem();
  let total_mem_gb = total_mem/1024/1024/1024;
  let total_mem_clean = total_mem_gb.toFixed(2) + ' GB';

  // uptime
  let uptime = os.uptime();
  let uptime_d = Math.floor(uptime / (3600*24));
  let uptime_h = Math.floor(uptime % (3600*24) / 3600);
  let uptime_m = Math.floor(uptime % 3600 / 60);
  let uptime_clean = uptime_d + 'd ' + uptime_h + 'h ' + uptime_m + 'm';

  let currentSystem = [
    {
      platform: os.platform(),
      release: os.release(),
      arch: os.arch(),
      memory: total_mem_clean,
      uptime: uptime_clean,
    }
  ]

  return currentSystem;
}
setInterval(updateCurrentSystem, 60000);

app.get('/', (req, res) => {
  res.json(updateCurrentSystem());
});


/**
 * shutdown server
 */
function shutdown() {
  const { exec } = require('child_process');
  exec('shutdown now', (error, stdout, stderr) => {
    if(error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if(stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

app.post('/shutdown', (req, res) => {
  console.log('shutdown request');

  //execute command
  shutdown();
});

/**
 * restart server
 */
 function restart() {
  const { exec } = require('child_process');
  exec('shutdown -r now', (error, stdout, stderr) => {
    if(error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if(stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

app.post('/restart', (req, res) => {
  console.log('restart request');

  //execute command
  restart();
});




/**
 * app.listen starts the server on port
 * define any port you would like
 */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});