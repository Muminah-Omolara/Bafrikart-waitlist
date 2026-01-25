export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function joinWaitlist(payload: {
  fullName: string;
  email: string;
  location: string;
  userType: string;
}) {
  const res = await fetch(`${API_BASE}/api/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to join waitlist");
  }

  return res.json();
}
