// Fix: Use standard Web API instead of Safari-incompatible method
export function handleLogin(credentials) {
  // Previously used navigator.credentials.store() which crashes Safari
  // Now using standard fetch-based authentication
  return fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
}
