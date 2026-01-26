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

  //Read the json response first (It contains the success OR error message)
  const data = await res.json();

  // If the request failed throw the REAL data
  if (!res.ok) {
    const error: any = new Error(data.message || "Failed to join waitlist");
    

    error.response = {
      status: res.status,
      data: data,
    };
    throw error;
  }

  return data;
}