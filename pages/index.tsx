import Head from 'next/head';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import styles from '../styles/Home.module.css';
import { CLIENT_RENEG_LIMIT } from 'tls';

type Todos = Array<Todo>;

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodo = async () => {
  const { data } = await axios.get<Todos>('https://jsonplaceholder.typicode.com/todos');
  return data;
};

export default function Home() {
  // const {data, isLoading, status} = useQuery('todos', fetchTodo);
  const { data, isLoading, status } = useQuery<Todos>({
    queryKey: 'todos',
    queryFn: fetchTodo,
    config: {},
  });

  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <ReactQueryDevtools initialIsOpen /> */}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        {isLoading ? (
          <h2 style={{ color: 'blue' }}>Loading...</h2>
        ) : (
          <>
            {status && (
              <p style={{ color: status === 'loading' ? 'red' : 'green' }}>Status: {status}</p>
            )}
            {data.map((todo) => (
              <p key={todo.id}>
                Todo: <b>{todo.title}</b>.
              </p>
            ))}
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
