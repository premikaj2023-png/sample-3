import data from './mockData.json';
import { FullMockData } from './schema';

// We cast the JSON to our Interface so TypeScript knows what's inside
export const mockData = data as FullMockData;

// Export all the Types so friends can use them in their own functions
export * from './schema';
// Add this to your shared/index.ts
