import { redirect } from "next/navigation"

// Root page that redirects to the default locale
export default function Home() {
  redirect("/en")
  return null
}

