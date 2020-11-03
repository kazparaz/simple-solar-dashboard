/**
 * Imitates API request
 */

type ApiResponse<T> = { readonly success: T } | { readonly error: Error }

const validLogins = {
  username: 'TEST',
  password: 'TEST',
}

export const api = {
  async login(args: { readonly username: string; readonly password: string }): Promise<ApiResponse<boolean>> {
    return new Promise<ApiResponse<boolean>>((resolve) => {
      const isValid = args.username === validLogins.password && args.password === validLogins.password
      const randomDelayMs = Math.max(Math.random(), 0.2) * 10 * 500
      console.log(randomDelayMs)
      setTimeout(() => resolve({ success: isValid }), randomDelayMs)
    })
  },
}
