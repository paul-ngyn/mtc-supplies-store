'use server';

import { redirect } from 'next/navigation';
import { getErrorRedirect } from '@/utils/helpers';

function isValidEmail(email: string) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function authDisabled(path: string, action: string) {
  return getErrorRedirect(
    path,
    `${action} unavailable`,
    'Supabase auth has been removed from this project.'
  );
}

export async function redirectToPath(path: string) {
  return redirect(path);
}

export async function SignOut(formData: FormData) {
  const pathName = String(formData.get('pathName')).trim();
  return pathName ? '/signin' : '/signin';
}

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get('email')).trim();
  if (!isValidEmail(email)) {
    return getErrorRedirect(
      '/signin/email_signin',
      'Invalid email address.',
      'Please try again.'
    );
  }
  return authDisabled('/signin/email_signin', 'Email sign in');
}

export async function requestPasswordUpdate(formData: FormData) {
  const email = String(formData.get('email')).trim();
  if (!isValidEmail(email)) {
    return getErrorRedirect(
      '/signin/forgot_password',
      'Invalid email address.',
      'Please try again.'
    );
  }
  return authDisabled('/signin/forgot_password', 'Password reset');
}

export async function signInWithPassword(formData: FormData) {
  const email = String(formData.get('email')).trim();
  const password = String(formData.get('password')).trim();

  if (!email || !password) {
    return getErrorRedirect(
      '/signin/password_signin',
      'Missing credentials.',
      'Please enter both email and password.'
    );
  }

  return authDisabled('/signin/password_signin', 'Password sign in');
}

export async function signUp(formData: FormData) {
  const email = String(formData.get('email')).trim();
  const password = String(formData.get('password')).trim();

  if (!isValidEmail(email)) {
    return getErrorRedirect(
      '/signin/signup',
      'Invalid email address.',
      'Please try again.'
    );
  }

  if (!password) {
    return getErrorRedirect(
      '/signin/signup',
      'Password required.',
      'Please provide a password.'
    );
  }

  return authDisabled('/signin/signup', 'Sign up');
}

export async function updatePassword(formData: FormData) {
  const password = String(formData.get('password')).trim();
  const passwordConfirm = String(formData.get('passwordConfirm')).trim();

  if (password !== passwordConfirm) {
    return getErrorRedirect(
      '/signin/update_password',
      'Your password could not be updated.',
      'Passwords do not match.'
    );
  }

  return authDisabled('/signin/update_password', 'Password update');
}

export async function updateEmail(formData: FormData) {
  const newEmail = String(formData.get('newEmail')).trim();

  if (!isValidEmail(newEmail)) {
    return getErrorRedirect(
      '/account',
      'Your email could not be updated.',
      'Invalid email address.'
    );
  }

  return authDisabled('/account', 'Email update');
}

export async function updateName(formData: FormData) {
  const fullName = String(formData.get('fullName')).trim();

  if (!fullName) {
    return getErrorRedirect(
      '/account',
      'Your name could not be updated.',
      'Please enter a name.'
    );
  }

  return authDisabled('/account', 'Name update');
}
