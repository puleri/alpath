import 'server-only';
import { achConfigIssues } from './config-check.mjs';

export function achConfig() {
  const configured = (value) =>
    Boolean(value?.trim() && !value.trim().startsWith('REPLACE_'));
  const requiredFields = {
    'Name on bank account': process.env.ACH_ACCOUNT_NAME,
    'Bank account number': process.env.ACH_ACCOUNT_NUMBER,
    'Nine-digit ACH routing / transit number (ABA)':
      process.env.ACH_ROUTING_NUMBER,
    'Type of account': process.env.ACH_ACCOUNT_TYPE,
  };
  const fields = {
    ...(configured(process.env.ACH_BANK_NAME)
      ? { 'Bank name': process.env.ACH_BANK_NAME }
      : {}),
    ...(configured(process.env.ACH_BANK_ADDRESS)
      ? { 'Bank address': process.env.ACH_BANK_ADDRESS }
      : {}),
    ...requiredFields,
  };
  const key = process.env.ACH_LINK_SIGNING_KEY;
  const demo = process.env.ACH_DEMO_MODE === 'true';
  const issues = achConfigIssues(process.env);
  const ready = issues.length === 0;
  return { fields, key, demo, ready, issues };
}
