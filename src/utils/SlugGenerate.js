const generateSlug = (name) => {
  if (!name || !name.trim()) return '';
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

export { generateSlug };
