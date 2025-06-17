'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-6">
        <h1 className="text-2xl font-bold">Welcome to the System</h1>
        <p className="text-gray-600">Choose your role to continue:</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/page1')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            👨‍🎓 Student
          </button>
          <button
            onClick={() => router.push('/page2')}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            👩‍🏫 Faculty
          </button>
          <button
            onClick={() => router.push('/page3')}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
          >
            🛠️ Admin
          </button>
        </div>
      </div>
    </main>
  );
}
