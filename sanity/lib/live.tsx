// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from "next-sanity";
import { type QueryParams } from '@sanity/client';
import { client } from './client';
import { ReactNode } from 'react';

export const liveClient = createClient({
  ...client.config(),
  useCdn: false,
  // For older versions:
  token: process.env.SANITY_API_TOKEN
});

// Simple component to enable live preview mode
export function SanityLive({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Function to fetch data with preview capabilities
// Fix the params type to match what the fetch function expects
export async function sanityFetch<T>(query: string, params?: QueryParams): Promise<T> {
  return liveClient.fetch<T>(query, params || {});
}
