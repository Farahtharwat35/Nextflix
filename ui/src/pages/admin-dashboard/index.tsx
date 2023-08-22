import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-bold mb-8">Admin Dashboard</h1>
      <nav className="flex justify-around">
        <Link href="/admin-dashboard/accounts">
          Manage Accounts
        </Link>
        <Link href="/admin-dashboard/users">
          Manage Users
        </Link>
        <Link href="/admin-dashboard/movies">
          Manage Movies
        </Link>
        <Link href="/admin-dashboard/series">
          Manage Series
        </Link>
      </nav>
    </div>
  );
};

export default DashboardPage;
