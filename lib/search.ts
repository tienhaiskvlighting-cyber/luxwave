// Client-side search using Fuse.js
// For server-side, consider Algolia or Elasticsearch

import Fuse from 'fuse.js';

const fuseOptions = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'sku', weight: 0.2 },
    { name: 'tech_specs', weight: 0.1 }
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2
};

export function createSearchIndex<T>(items: T[], keys: string[]): Fuse<T> {
  return new Fuse(items, {
    ...fuseOptions,
    keys
  });
}

export function searchProducts<T>(
  fuse: Fuse<T>, 
  query: string, 
  limit: number = 10
): any[] {
  if (!query || query.length < 2) return [];
  
  return fuse.search(query, { limit });
}

// Search result types
export interface SearchResult {
  type: 'product' | 'project' | 'article' | 'page';
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
}

// Combine search across multiple collections
export async function globalSearch(query: string) {
  if (!query || query.length < 2) return [];
  
  const results: SearchResult[] = [];
  
  try {
    // Fetch from Directus
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/products?filter[name][_contains]=${query}&fields=id,name,slug,short_description,images`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.DIRECTUS_API_TOKEN}`
        }
      }
    );
    
    const data = await response.json();
    
    if (data.data) {
      data.data.forEach((product: any) => {
        results.push({
          type: 'product',
          id: product.id,
          title: product.name,
          description: product.short_description || '',
          url: `/products/${product.slug}`,
          image: product.images?.[0]
        });
      });
    }
  } catch (error) {
    console.error('Search error:', error);
  }
  
  return results;
}
