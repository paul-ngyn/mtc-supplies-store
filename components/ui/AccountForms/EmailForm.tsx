'use client';

import Button from '@/components/ui/Button';
import { updateEmail } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EmailForm({
  userEmail
}: {
  userEmail: string | undefined;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new email is the same as the old email
    if (e.currentTarget.newEmail.value === userEmail) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateEmail, router);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Email</h2>
        <p className="text-gray-600 text-sm">
          Please enter the email address you want to use to login.
        </p>
      </div>

      <form id="emailForm" onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div>
          <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="newEmail"
            id="newEmail"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            defaultValue={userEmail ?? ''}
            placeholder="Enter your email address"
            maxLength={64}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            We will email you to verify the change.
          </p>
          <Button
            variant="slim"
            type="submit"
            loading={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Update Email
          </Button>
        </div>
      </form>
    </div>
  );
}