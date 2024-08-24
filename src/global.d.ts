/* eslint-disable @typescript-eslint/no-explicit-any */

interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (args: { method: string; params?: unknown[] }) => Promise<any>;
  };
}
