module.exports = {
  apps : [{
    name: 'server-m',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-15-142-254.us-east-2.compute.amazonaws.com',
      key  : '~/.ssh/server-m.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-m.git',
      path : '/home/ubuntu/server-m',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
