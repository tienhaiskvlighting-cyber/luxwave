// SEO Components and Utilities

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
  tags?: string[];
}

// JSON-LD Schema for Organization
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Luxwave",
    "url": "https://luxwave.vn",
    "logo": "https://luxwave.vn/logo-luxwave.png",
    "description": "Giải pháp LED hàng đầu Việt Nam. Chuyên cung cấp và thi công màn hình LED, đèn chiếu logo GOBO, LED trang trí.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phố biển 16-08, Nghĩa Trụ",
      "addressLocality": "Văn Giang",
      "addressRegion": "Hưng Yên",
      "addressCountry": "VN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-862-30-1919",
      "contactType": "customer service",
      "email": "info.luxwave@gmail.com"
    },
    "sameAs": [
      "https://facebook.com/luxwave",
      "https://youtube.com/luxwave"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// JSON-LD Schema for Product
export function ProductSchema({ product }: { product: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Luxwave"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "VND",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  // Add technical specs if available
  if (product.tech_specs) {
    Object.assign(schema, {
      "additionalProperty": Object.entries(product.tech_specs).map(([key, value]) => ({
        "@type": "PropertyValue",
        "name": key,
        "value": value
      }))
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// JSON-LD Schema for FAQ
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
