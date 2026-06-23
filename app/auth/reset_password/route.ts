import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getErrorRedirect } from '@/utils/helpers';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  return NextResponse.redirect(
    getErrorRedirect(
      `${requestUrl.origin}/signin/forgot_password`,
      'Password reset unavailable',
      'Supabase auth has been removed from this project.'
    )
  );
}
