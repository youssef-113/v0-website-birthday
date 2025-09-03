export const dynamic = "force-static"

export async function GET(req: Request) {
  // Redirect to an existing image in /public to avoid 404s for /favicon.ico
  return Response.redirect(new URL("/placeholder-logo.png", req.url), 308)
}
