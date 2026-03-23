'use client';

import { useList } from '@/utils/listContext';
import Link from 'next/link';

type ListButtonProps = {
  iconOnly?: boolean;
};

export default function ListButton({ iconOnly = false }: ListButtonProps) {
  const { totalItems } = useList();

  return (
    <Link
      href="/list"
      className={`relative flex items-center py-2 px-1 text-[#1c51a3] hover:text-[#153d7f] transition-colors duration-200 ${
        iconOnly ? '' : 'gap-2'
      }`}
      title="My Product List"
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
      {!iconOnly && <span className="font-medium text-sm">My List</span>}
      {totalItems > 0 && (
        <span
          className={`absolute bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${
            iconOnly ? '-top-1 -right-1' : '-top-1 left-4'
          }`}
        >
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
}
