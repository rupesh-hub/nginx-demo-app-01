import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://51.120.247.60:3000/api/message")
        setMessage(response?.data?.message || "");
        setError(null); 
      } catch (error) {
        console.error(error);
        setError("Error: Failed to fetch data from the backend."); 
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="flex max-w-7xl mx-auto mt-6 text-gray-600 p-4 justify-center items-center min-h-screen">
        {loading ? (
          <p className="text-semibold font-serif">Loading...</p>
        ) : (
          <>
            {/* Display server-side error message */}
            {error && (
              <p className="text-red-600 font-semibold font-serif italic text-xl bg-red-100 px-10 py-2 rounded-lg mb-4">
                {error}
              </p>
            )}
             {/* Display server-side success message */}
             {message && (
              <p className="text-green-600 font-semibold font-serif italic text-xl bg-green-100 px-10 py-2 rounded-lg mb-4">
                {message}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;