import Link from 'next/link';
// ...

const DashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link href="/accounts">
          <a>Manage Accounts</a>
        </Link>
        <Link href="/users">
          <a>Manage Users</a>
        </Link>
        <Link href="/movies">
          <a>Manage Movies</a>
        </Link>
        <Link href="/series">
          <a>Manage Series</a>
        </Link>
      </nav>
    </div>
  );
};