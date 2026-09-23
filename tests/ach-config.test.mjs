import test from 'node:test';
import assert from 'node:assert/strict';
import { achConfigIssues } from '../src/lib/ach/config-check.mjs';

const configured = {
  ACH_ACCOUNT_NAME: 'Private example company',
  ACH_ACCOUNT_NUMBER: '000123456789',
  ACH_ROUTING_NUMBER: '000000000',
  ACH_ACCOUNT_TYPE: 'Checking',
  ACH_LINK_SIGNING_KEY: 'a'.repeat(43),
};

test('bank name and address are optional; configured account fields pass', () => {
  assert.deepEqual(achConfigIssues(configured), []);
});

test('diagnostics identify each missing field without disclosing values', () => {
  for (const name of Object.keys(configured)) {
    const issues = achConfigIssues({ ...configured, [name]: '' });
    assert.deepEqual(issues, [`${name}: missing or empty in this deployment.`]);
    for (const value of Object.values(configured))
      assert.ok(!issues.join(' ').includes(value));
  }
});

test('placeholder values and short keys have actionable diagnostics', () => {
  assert.match(
    achConfigIssues({
      ...configured,
      ACH_ACCOUNT_NUMBER: ' REPLACE_WITH_NUMBER',
    })[0],
    /ACH_ACCOUNT_NUMBER: still contains a placeholder/,
  );
  const issues = achConfigIssues({
    ...configured,
    ACH_LINK_SIGNING_KEY: 'private-short-key',
  });
  assert.match(issues[0], /ACH_LINK_SIGNING_KEY: too short/);
  assert.ok(!issues[0].includes('private-short-key'));
  assert.match(
    achConfigIssues({ ...configured, ACH_LINK_SIGNING_KEY: ' '.repeat(43) })[0],
    /missing or empty/,
  );
});
