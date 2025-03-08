'use client';

import { ClipLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <ClipLoader color="#3B82F6" size={50} className="animate-fade-in" loading={true} /> {/* Blue spinner */}
      <p className="mt-4 text-gray-700 text-lg animate-fade-in-delay">
        Loading dashboard...
      </p>
    </div>
  );
}