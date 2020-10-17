module.exports = {
    apps: [
        {
            name: 'home-website',
            script: 'npm run start',
            exp_backoff_restart_delay: 100,
            listen_timeout: 1000,
            ignore_watch: 'node_modules',
            env: {
                NODE_ENV: 'production',
                PORT: 4000
            },
            log_date_format: 'YYYY-MM-DD HH:mm Z'
        }
    ]
}