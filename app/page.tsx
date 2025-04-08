export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1>Entorno de desarrollo</h1>
        {process.env.NODE_ENV}
      </div>
      <div>
        <h2>Variables de entorno</h2>
        {process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
          "http://localhost:3000"}
      </div>
    </div>
  );
}
