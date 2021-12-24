module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '189c3194aa49403ba61951753d64aeae'),
  },
});
