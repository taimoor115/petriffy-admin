import * as yup from 'yup';

const featuredSchema = yup.object().shape({
  vehicle_id: yup.number().required('Vehicle name is required'),
  created_at: yup.string(),
  closed_at: yup.string(),
  active: yup.boolean(),
});

// ===================BRAND SCHEMA ====================

const brandSchema = yup.object().shape({
  logo_url: yup
    .string()
    .url('Logo URL must be a valid URL')
    .required('Logo URL is required')
    .test(
      'is-image-url',
      'Only image formats (png, jpg, jpeg, gif, webp) are allowed',
      value => {
        if (!value) return true;
        const validFormats = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
        const extension = value.split('.').pop().toLowerCase();
        return validFormats.includes(extension);
      }
    ),
  name: yup.string().required('Name is required'),
  type: yup.string().required('Type is required'),
  description: yup.string().optional(),
  active: yup.boolean(),
  featured: yup.boolean(),
  integration_mappings: yup.object().shape({
    cochesnet: yup.string().required('Cochesnet Map is required'),
    autocasion: yup.string().required('Autocasion Map is required'),
    milanuncios: yup.string().required('Milanuncios Map is required'),
    wallapop: yup.string().required('Wallapop Map is required'),
  }),
});

// ===================== MODEL SCHEMA =================

const modelSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  brand_id: yup.number().required('Brand is required'),
  type: yup.string().required('Type is required'),
  description: yup.string(),
  integration_mappings: yup.object().shape({
    cochesnet: yup.string().required('Cochesnet Map is required'),
    autocasion: yup.string().required('Autocasion Map is required'),
    milanuncios: yup.string().required('Milanuncios Map is required'),
    wallapop: yup.string().required('Wallapop Map is required'),
  }),
  active: yup.boolean(),
});

// ===================== MODEL VERSION SCHEMA =================

const modelVersionSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  vehicle_model_id: yup.number().required('Brand is required'),
  type: yup.string().required('Type is required'),
  year: yup.number().required('Year is required').positive('Number should be positive'),
  body_type: yup.string().required('Body type is required'),
  doors: yup.number().required('Doors is required').positive('Number should be positive'),
  fuel_type: yup.string().required('Fuel Type is required'),
  description: yup.string().optional(),
  integration_mappings: yup.object().shape({
    cochesnet: yup.string().required('Cochesnet Map is required'),
    autocasion: yup.string().required('Autocasion Map is required'),
    milanuncios: yup.string().required('Milanuncios Map is required'),
    wallapop: yup.string().required('Wallapop Map is required'),
  }),
});

// ====================== VEHICLE SCHEMA ===================

const vehicleSchema = yup.object().shape({
  brands: yup.string().required('Brand is required'),
  models: yup.string().required('Model is required'),
  reference: yup.string().required('Reference is required'),
  registration_plate: yup.string().required('Registration plate is required'),
  chassis_number: yup.string().required('Chassis number is required'),
  vehicle_model_version_id: yup
    .number()
    .required('Version Id is required')
    .positive()
    .integer(),
  vehicle_model_addition: yup.string().optional(),
  offer_type: yup.string().required().oneOf(['used', 'km0', 'new']),
  price: yup.number().required().positive(),
  discounted_price: yup.number().optional().positive().lessThan(yup.ref('price')),
  kilometers: yup.number().required().positive().integer(),
  power_hp: yup.number().required().positive().integer(),
  seats: yup.number().required().positive().integer(),
  transmission: yup.string().required().oneOf(['manual', 'automatic']),
  fuel_consumption: yup.string().optional(),
  environmental_badge: yup.string().required(),
  location_override: yup.string().optional(),
  zipcode_override: yup.string().optional(),
  color: yup.string().required(),
  warranty_type: yup
    .string()
    .required('Warranty Type is required')
    .oneOf(['dealership', 'brand', 'none']),
  warranty_length: yup
    .number()
    .required('Warranty Length is required')
    .positive()
    .integer(),
  description: yup.string().required(),
  description_translations: yup
    .object()
    .shape({
      es: yup.string().optional(),
      nl: yup.string().optional(),
      de: yup.string().optional(),
      ru: yup.string().optional(),
    })
    .optional(),
  status: yup.string().required('Status is required'),
  registration_date: yup.string().required('Registration date is required'),
  active: yup.boolean().required(),
});

// ====================== CONTACT SCHEMA ===================

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email Address is required')
    .email('Invalid email address'),
  phone: yup.string().required('Phone number is required'),
  form_type: yup.string().required('Form type is required'),
  vehicle_id: yup.string().nullable().optional(),
  specific_form_data: yup.string().optional(),
  message: yup.string().optional(),
});

//  ==================== VEHICLE REQUEST SCHEMA =======================

const requestSchema = yup.object().shape({
  customer_name: yup.string().required('Customer name is required'),
  customer_email: yup
    .string()
    .email('Invalid email address')
    .required('Email Address is required'),
  customer_phone: yup.string().required('Customer phone is required'),
  price_upto: yup
    .number()
    .required('Price upto is required')
    .positive('Price upto must be positive')
    .integer('Price upto must be an integer'),
  km_upto: yup
    .number()
    .required('Kilometer upto is required')
    .positive('Kilometer upto must be positive')
    .integer('Kilometer upto must be an integer'),
  year_from: yup
    .number()
    .required('Year  is required')
    .positive('Year  must be positive')
    .integer('Year  must be an integer'),
  message: yup.string().required('Message is required'),
  brand: yup.string().required('Brand is required'),
  model: yup.string().required('Model is required'),
  fuel_type: yup.string().required('Fuel type is required'),
  status: yup.string().optional(),
});

// ====================== PRICE SCHEMA =================

const priceSchema = yup.object().shape({
  vehicle_id: yup.number().required('Vehicle is required'),
  initial_price: yup
    .number()
    .required('Initial Price is required')
    .positive('Initial price should be positive')
    .integer('Invalid initial price'),
  customer_email: yup
    .string()
    .email('Invalid email address')
    .required('Email Address is required'),
  customer_name: yup.string().required('Customer name is required'),
  customer_phone: yup.string().required('Customer phone is required'),
  active: yup.boolean(),
});

// ====================== PAGES SCHEMA =================

const pagesSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  slug: yup.string(),
  subTitle: yup.string().required('Subtitle is required'),
  brand: yup.string().required('Brand is required'),
  chassis: yup.string().required('Chassis is required'),
  location: yup.string().required('Location is required'),
  content: yup.string().required('Content  is required'),
  minPrice: yup
    .number()
    .required('Kilometer limit is required')
    .positive('Kilometer limit must be positive')
    .integer('Kilometer limit must be an integer'),
  maxPrice: yup
    .number()
    .required('Kilometer limit is required')
    .positive('Kilometer limit must be positive')
    .integer('Kilometer limit must be an integer'),
  seoDescription: yup.string().required('SEO Description  is required'),
  featureImage: yup.mixed().test('fileRequired ', 'Feature Image is required', value => {
    return value instanceof FileList && value.length > 0;
  }),
  gallery: yup.mixed().test('fileRequired', 'Feature Image is required', value => {
    return value instanceof FileList && value.length > 0;
  }),
  list: yup.boolean(),
  featured: yup.boolean(),
  noIndex: yup.boolean(),
  noFollow: yup.boolean(),
});

// ====================== BLOG SCHEMA =====================

const blogSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  title_translations: yup.object().shape({
    es: yup.string(),
    nl: yup.string(),
    de: yup.string(),
    ru: yup.string(),
  }),
  content: yup.string().required('Content is required'),
  content_translations: yup.object().shape({
    es: yup.string(),
    nl: yup.string(),
    de: yup.string(),
    ru: yup.string(),
  }),
  publication_date: yup.string(),
  latest_update: yup.string(),
  author: yup.string().required('Author is required'),
  tags: yup.string().required('Tags is required'),
  primary_picture_url: yup
    .string()
    .required('Primary Picture URL is required')
    .test(
      'is-image-url',
      'Only image formats (png, jpg, jpeg, gif, webp) are allowed',
      value => {
        if (!value) return true;
        const validFormats = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
        const extension = value.split('.').pop().toLowerCase();
        return validFormats.includes(extension);
      }
    ),
});

// ====================== USERS SCHEMA =================

const usersSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  enabled: yup.boolean(),
  sonata_admin: yup.boolean(),
  role_switch: yup.boolean(),
  role_admin: yup.boolean(),
  super_admin: yup.boolean(),
});

// ====================== MEDIA SCHEMA =============================

const mediaSchema = yup.object().shape({
  file: yup
    .mixed()
    .required('File is required')
    .test('fileType', 'Only image files are allowed', value => {
      if (!value) return true;
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test('fileSize', 'File size must be less than 5 MB', value => {
      if (!value) return true;
      return value && value.size <= 5 * 1024 * 1024;
    }),
  vehicle_id: yup.number().required('Vehicle  is required'),
  media_category: yup.string().required('Media category is required'),
  presentation_order: yup.number().required('Presentation order is required'),
  description: yup.string(),
  primary: yup.boolean(),
});

// ====================== RESERVATION SCHEMA =============================

const reservationSchema = yup.object().shape({
  customer_name: yup.string().required('Customer name is required'),
  customer_email: yup
    .string()
    .email('Invalid email address')
    .required('Customer Email is required'),
  customer_phone: yup.string().required('Phone number is required'),
  vehicle_id: yup
    .number()
    .required('Vehicle Name is required')
    .positive('Vehicle Name must be an integer'),
  deposit_amount: yup
    .number()
    .required('Deposit amount is required')
    .positive('Deposit amount must be positive')
    .integer('Deposit amount must be an integer'),
  status: yup.string().optional(),
  expiration_date: yup.string().optional(),
});

const staticPageSchema = yup.object().shape({
  reference: yup.string().required('Reference is required'),
  type: yup.string().required('Type is required'),
  title: yup.string().required('Title is required'),
  title_translations: yup
    .object()
    .shape({
      es: yup.string().optional(),
      nl: yup.string().optional(),
      de: yup.string().optional(),
      ru: yup.string().optional(),
    })
    .optional(),
  content: yup.string().required('Content is required'),
  content_translations: yup
    .object()
    .shape({
      es: yup.string().optional(),
      nl: yup.string().optional(),
      de: yup.string().optional(),
      ru: yup.string().optional(),
    })
    .optional(),
  author: yup.string().required('Author is required'),
});

// ======================== Login Schema ===================
const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

// ========== Price Alert Notification =================
const priceNotificationSchema = yup.object().shape({
  notification_method: yup.string().required('Notification method is required'),
  new_price: yup
    .number()
    .positive('New price must positive be a number')
    .required('New price is required'),
  old_price: yup
    .number()
    .positive('Old price must positive be a number')
    .required('Old price is required'),
});

// ============= General Schema ================

const generalSchema = yup.object().shape({
  type: yup.string().required('Type is required'),
  page_reference: yup.string().nullable(),
  integration_reference: yup.string().nullable(),
  config: yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    currency: yup.string().required('Currency is required'),
    logo_url: yup.mixed(),
    timezone: yup.string().required('Timezone is required'),
    site_title: yup.string().required('Site title is required'),
    theme_font: yup.string().required('Theme font is required'),
    favicon_url: yup.mixed(),
    full_adress: yup.string().required('Full address is required'),
    phone_number: yup.string().required('Phone number is required'),
    site_tagline: yup.string().required('Site tagline is required'),
    social_media: yup.object().shape({
      facebook: yup.string().url('Invalid URL'),
      instagram: yup.string().url('Invalid URL'),
      google: yup.string().url('Invalid URL'),
      twitter: yup.string().url('Invalid URL'),
      youtube: yup.string().url('Invalid URL'),
    }),
    theme_colors: yup.object().shape({
      1: yup.string().required('Color 1 is required'),
      2: yup.string().required('Color 2 is required'),
      3: yup.string().required('Color 3 is required'),
      4: yup.string().required('Color 4 is required'),
      5: yup.string().required('Color 5 is required'),
    }),
    opening_hours: yup.string().required('Opening hours are required'),
    phone_number_2: yup.string(),
    site_languages: yup
      .array()
      .of(yup.string())
      .min(1, 'At least one site language is required'),
    main_menu_items: yup
      .array()
      .of(yup.string())
      .min(1, 'At least one menu item is required'),
    content_languages: yup
      .array()
      .of(yup.string())
      .min(1, 'At least one content language is required'),
    maintenance_active: yup.boolean(),
    multiple_locations: yup.boolean(),
    maintenance_message: yup.string().required('Maintenance message is required'),
    custom_links_columns: yup.number().required('Custom links columns is required'),
    custom_links_content: yup.array().of(
      yup.object().shape({
        label: yup.string().required('Label is required'),
        path: yup.string().required('Path is required'),
      })
    ),
    display_custom_links: yup.boolean(),
    secondary_menu_items: yup
      .array()
      .of(yup.string())
      .min(1, 'At least one secondary menu item is required'),
    display_language_selector: yup.boolean(),
  }),
});

export {
  featuredSchema,
  brandSchema,
  modelSchema,
  vehicleSchema,
  contactSchema,
  requestSchema,
  priceSchema,
  pagesSchema,
  blogSchema,
  usersSchema,
  mediaSchema,
  reservationSchema,
  loginSchema,
  modelVersionSchema,
  staticPageSchema,
  priceNotificationSchema,
  generalSchema,
};
