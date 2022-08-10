export function fetchStatus(status: boolean) {
  return new Promise<{ updateStatus: boolean }>((resolve) =>
    setTimeout(() => resolve({ updateStatus: status }), 500)
  );
}
