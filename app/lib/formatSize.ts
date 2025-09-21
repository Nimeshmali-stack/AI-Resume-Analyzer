/**
 * Formats a file size in bytes to a human-readable string
 * @param bytes - The size in bytes
 * @param decimals - Number of decimal places to show (default: 2)
 * @returns Formatted string with appropriate unit (B, KB, MB, GB, TB)
 */
export function formatSize(bytes: number, decimals: number = 2): string {
  // Handle edge cases
  if (bytes === 0) return '0 B';
  if (bytes < 0) return 'Invalid size';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Ensure we don't exceed our sizes array
  const sizeIndex = Math.min(i, sizes.length - 1);
  
  const formattedSize = parseFloat((bytes / Math.pow(k, sizeIndex)).toFixed(dm));
  
  return `${formattedSize} ${sizes[sizeIndex]}`;
}
