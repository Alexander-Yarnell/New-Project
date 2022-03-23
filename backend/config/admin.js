module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '63cd10385ef0f7113124cac0d2e80e53'),
  },
});
