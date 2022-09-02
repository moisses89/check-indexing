export default () => ({
    safeConfig: {
      baseUri:
        process.env.SAFE_CONFIG_BASE_URI || 'https://safe-config.gnosis.io',
    },
  });