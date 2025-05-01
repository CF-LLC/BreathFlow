export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="mb-8">This is a test page to verify routing is working.</p>
        <a
          href="/"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-md inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
