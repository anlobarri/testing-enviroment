export default function HomePage() {
  const productionUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  const previewUrl = process.env.NEXT_PUBLIC_VERCEL_URL; // Usado para preview y desarrollo con `vercel dev`

  let baseUrl;
  if (process.env.VERCEL_ENV === "production") {
    baseUrl = productionUrl;
  } else {
    baseUrl = previewUrl;
  }

  const displayUrl = baseUrl ? `https://${baseUrl}` : "http://localhost:3000";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <p>Probando los entornos de desarollo en VERCEL</p>
        <h1>Entorno de desarrollo</h1>
        {process.env.VERCEL_ENV}
      </div>
      <div>
        <h2>Variables de entorno</h2>
        {displayUrl}
      </div>
    </div>
  );
}
