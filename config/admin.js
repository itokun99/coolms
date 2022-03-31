module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f0bfb6e1322c80348038baa7321be2e'),
  },
});
