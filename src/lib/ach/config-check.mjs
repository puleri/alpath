// Return variable names and corrective guidance only, never secret values.
export function achConfigIssues(env) {
  const names = [
    'ACH_ACCOUNT_NAME',
    'ACH_ACCOUNT_NUMBER',
    'ACH_ROUTING_NUMBER',
    'ACH_ACCOUNT_TYPE',
    'ACH_LINK_SIGNING_KEY',
  ];
  return names.flatMap((name) => {
    const value = env[name];
    if (typeof value !== 'string' || !value.trim())
      return [`${name}: missing or empty in this deployment.`];
    if (value.trim().startsWith('REPLACE_'))
      return [`${name}: still contains a placeholder.`];
    if (name === 'ACH_LINK_SIGNING_KEY' && value.trim().length < 43)
      return [
        `${name}: too short. Generate a 32-byte random key encoded as base64url (43 characters) or hex (64 characters).`,
      ];
    return [];
  });
}
