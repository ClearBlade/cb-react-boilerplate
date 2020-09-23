export {};

declare global {
  interface Window {
    CB_PORTAL: { ClearBlade: IClearBlade };
  }
}
