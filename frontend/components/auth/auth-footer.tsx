import Link from 'next/link';
import React from 'react'

export const AuthFooter = () => {
  return (
    <footer className="w-full bg-gray-200 p-4 dark:bg-gray-800">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/privacy" className="mr-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
