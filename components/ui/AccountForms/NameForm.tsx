'use client';

import Button from '@/components/ui/Button';
import { updateName } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NameForm({ userName }: { userName: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === userName) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateName, router);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Name</h2>
        <p className="text-gray-600 text-sm">
          Please enter your full name, or a display name you are comfortable with.
        </p>
      </div>

      <form id="nameForm" onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            defaultValue={userName}
            placeholder="Enter your full name"
            maxLength={64}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            64 characters maximum
          </p>
          <Button
            variant="slim"
            type="submit"
            loading={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Update Name
          </Button>
        </div>
      </form>
    </div>
  );
}