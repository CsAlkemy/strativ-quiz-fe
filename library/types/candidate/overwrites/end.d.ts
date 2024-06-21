declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_TELEMETRY_DISABLED: 1 | 0
      NODE_ENV: 'development' | 'production'

      NEXT_PUBLIC_JOB_SEEKER_API_BASE_URL: string

      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
      NEXT_PUBLIC_LINKEDIN_CLIENT_ID: string
      NEXT_PUBLIC_MICROSOFT_CLIENT_ID: string

      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
      NEXT_PUBLIC_SOCKET_URL: string
    }
  }
}

export {}
