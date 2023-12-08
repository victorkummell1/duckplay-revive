export default function NotFound() {
  return (
    <main className="h-[calc(100vh-160px)] flex items-center justify-center">
      <svg
        className="mr-3 h-10 w-10 animate-spin text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#8b5cf6"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="#8b5cf6"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </main>
  )
}