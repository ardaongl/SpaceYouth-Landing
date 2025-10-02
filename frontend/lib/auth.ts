import { api } from "./api"

export type LoginPayload = { email: string; password: string }
export type RegisterPayload = { name: string; email: string; password: string }
export type ForgotRequestPayload = { email: string }
export type VerifyCodePayload = { email: string; code: string }
export type ResetPasswordPayload = { email: string; password: string }

export const auth = {
  login: (data: LoginPayload) => api.post("/auth/login", data).then((r) => r.data),
  register: (data: RegisterPayload) => api.post("/auth/register", data).then((r) => r.data),
  requestReset: (data: ForgotRequestPayload) => api.post("/auth/forgot-password", data).then((r) => r.data),
  verifyCode: (data: VerifyCodePayload) => api.post("/auth/verify-code", data).then((r) => r.data),
  resetPassword: (data: ResetPasswordPayload) => api.post("/auth/reset-password", data).then((r) => r.data),
}
