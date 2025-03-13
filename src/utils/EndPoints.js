const config = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  endPoints: {
    BRANDS: 'brands',
    MODELS: 'models',
    VEHICLES: 'vehicles',
    MEDIA: 'media',
    BLOG: 'blog-posts',
    FEATURED: 'vehicles/featured',
    MODEL_VERSIONS: 'model-versions',
    RESERVATION: 'reservations',
    REQUEST: 'vehicle-requests',
    PRICE_ALERT: 'price-alerts',
    CONTACT_FORMS: 'contact-forms',
    STATIC_PAGES: 'custom-pages',
    SITE_CONFIG: 'config',
  },
};
export { config };
