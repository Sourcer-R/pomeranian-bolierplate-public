import { set } from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';

export function ApiCallExercise() {
  const [getPosts, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error('Network response is not ok');
        }
        const postData = await response.json();
        //wyciaganie danych z API
        setPosts(postData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        console.log('Finally we managed!');
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container--try-catch">
      {getIsLoading && `Loading...`}
      {getError && getError}

      <ul>
        {getPosts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
}
