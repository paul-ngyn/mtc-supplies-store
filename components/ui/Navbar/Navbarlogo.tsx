'use client';

import { useRouter } from 'next/navigation';

export default function Navbarlogo() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div 
      onClick={handleClick}
      className="flex items-center cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"
    >
      <span className="font-bold text-xl">TKN Supplies</span>
    </div>
  );
}