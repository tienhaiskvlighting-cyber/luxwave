// Directus API Client
// Usage: import { getProducts, getProductBySlug } from '@/lib/directus'

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_API_TOKEN;

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  brand: string;
  price: number;
  unit: string;
  tech_specs: Record<string, any>;
  environment: string;
  application: string[];
  technology: string;
  images: string[];
  meta_title: string;
  meta_description: string;
  status: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent: string | null;
  description: string;
  icon: string;
  image: string;
  sort: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  completion_date: string;
  scale: string;
  challenge: string;
  solution: string;
  images: string[];
  products: string[];
  status: string;
}

// Fetch helpers
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${DIRECTUS_URL}/items/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(DIRECTUS_TOKEN ? { 'Authorization': `Bearer ${DIRECTUS_TOKEN}` } : {}),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
}

// Products
export async function getProducts(filters?: string): Promise<Product[]> {
  const query = filters ? `?${filters}` : '?sort=sort';
  return fetchAPI<Product[]>(`products${query}`);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchAPI<Product[]>(
    `products?filter[slug][_eq]=${slug}&filter[status][_eq]=published`
  );
  return products[0] || null;
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return fetchAPI<Product[]>(
    `products?filter[category][slug][_eq]=${categorySlug}&filter[status][_eq]=published&sort=sort`
  );
}

// Categories
export async function getCategories(): Promise<Category[]> {
  return fetchAPI<Category[]>('categories?sort=sort');
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await fetchAPI<Category[]>(`categories?filter[slug][_eq]=${slug}`);
  return categories[0] || null;
}

// Projects
export async function getProjects(): Promise<Project[]> {
  return fetchAPI<Project[]>('projects?filter[status][_eq]=published&sort=-completion_date');
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await fetchAPI<Project[]>(
    `projects?filter[slug][_eq]=${slug}&filter[status][_eq]=published`
  );
  return projects[0] || null;
}

// Solutions
export async function getSolutions() {
  return fetchAPI<any[]>('solutions?sort=sort');
}

// Articles
export async function getArticles() {
  return fetchAPI<any[]>('articles?filter[status][_eq]=published&sort=-published_at');
}

export async function getArticleBySlug(slug: string) {
  const articles = await fetchAPI<any[]>(
    `articles?filter[slug][_eq]=${slug}&filter[status][_eq]=published`
  );
  return articles[0] || null;
}
