const CONVEX_AUTH_CONFIG = {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
      applicationID: "convex",
    },
  ],
};

export default CONVEX_AUTH_CONFIG;
