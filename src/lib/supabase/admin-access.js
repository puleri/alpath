export const ADMIN_EMAIL = 'matt@alpathengineering.com';

export function isAgreementAdmin(user) {
  return Boolean(user?.email_confirmed_at) && user.email?.toLowerCase() === ADMIN_EMAIL;
}
