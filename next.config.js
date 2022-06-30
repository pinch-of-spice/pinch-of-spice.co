/**
 * @type {import('next').NextConfig}
 */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  return {
    reactStrictMode: true,
    env: {
      gaId:
        phase === PHASE_DEVELOPMENT_SERVER ? "G-C0SQXQ1NEQ" : "G-B5BCGMSKKC",
    },
  };
};
