import { useState, useEffect } from 'react';

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an AbortController to cleanup request on unmount
    const controller = new AbortController();

    async function fetchJokes() {
      try {
        setLoading(true);
        setError(null);

        // Fetch using relative path (relies on Vite proxy)
        const response = await fetch('/api/jokes', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setJokes(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchJokes();

    // Cleanup function runs if the component unmounts
    return () => controller.abort();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading jokes...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Jokes List</h1>
      <ul>
        {jokes.map((joke) => (
          <li key={joke.id} style={{ marginBottom: '12px' }}>
            <strong>{joke.setup}</strong>
            <p>{joke.punchline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}