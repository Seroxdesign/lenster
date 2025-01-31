import { expect, test } from '@playwright/test';
import { STATIC_IMAGES_URL } from 'data/constants';
import getWalletDetails from 'lib/getWalletDetails';

test.describe('getWalletDetails', () => {
  test('should return correct details for WalletConnect', () => {
    const walletDetails = getWalletDetails('WalletConnectLegacy');
    expect(walletDetails.name).toBe('Wallet Connect');
    expect(walletDetails.logo).toBe(
      `${STATIC_IMAGES_URL}/wallets/walletconnect.svg`
    );
  });

  test('should return correct details for name other than WalletConnect', () => {
    const walletDetails = getWalletDetails('SomeOtherWallet');
    expect(walletDetails.name).toBe('SomeOtherWallet');
    expect(walletDetails.logo).toBe(
      `${STATIC_IMAGES_URL}/wallets/browser-wallet.svg`
    );
  });

  test('should handle empty string as input', () => {
    const walletDetails = getWalletDetails('');
    expect(walletDetails.name).toBe('');
    expect(walletDetails.logo).toBe(
      `${STATIC_IMAGES_URL}/wallets/browser-wallet.svg`
    );
  });
});
