// utils/auth.ts
import Cookies from "js-cookie";

export function getAuthToken() {
  const allCookies = Cookies.get();
  console.log("All cookies available now:", allCookies);

  const token = Cookies.get("accessToken");
  console.log("Access token cookie:", token);

  return token || null;
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000;
    return Date.now() > exp;
  } catch {
    return true; // invalid token = expired
  }
}
