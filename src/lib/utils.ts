import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves a complete image URL by prepending storage bucket if needed
 * If the URL is already absolute (http/https), returns as-is
 * If relative, prepends the NEXT_PUBLIC_STORAGE_BUCKET
 */
export function resolveImageUrl(url?: string | null): string {
  if (!url) return "";
  
  // If already a complete URL, return as-is
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  
  const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET || "";
  
  // Handle path starting with /
  if (url.startsWith("/")) {
    return storageBucket + url;
  }
  
  // Otherwise prepend with / separator
  return storageBucket + "/" + url;
}

/**
 * Alias for resolveImageUrl - resolves file URLs the same way
 */
export function resolveFileUrl(url?: string | null): string {
  return resolveImageUrl(url);
}

/**
 * Resolves avatar URLs with the same logic as images
 */
export function resolveAvatar(avatar?: string | null): string {
  return resolveImageUrl(avatar);
}
