module.exports = {
  ROLES: {
    USER: 'user',
    OWNER: 'owner',
  },
  APP_VISIBILITY: {
    PUBLIC: 'public',
    HIDDEN: 'hidden',
  },
  NOTIFICATION_TYPES: {
    APP_DOWNLOADED: 'app_downloaded',
    APP_UPDATED: 'app_updated',
    GENERAL: 'general',
  },
  DEFAULT_CATEGORIES: [
    {
      name: 'Games',
      slug: 'games',
      description: 'Interactive and entertainment applications for gamers.',
    },
    {
      name: 'Beauty',
      slug: 'beauty',
      description: 'Beauty, makeup, and self-care related applications.',
    },
    {
      name: 'Fashion',
      slug: 'fashion',
      description: 'Style, trends, shopping, and fashion discovery apps.',
    },
    {
      name: 'Women',
      slug: 'women',
      description: 'Applications focused on women-centric services and content.',
    },
    {
      name: 'Health',
      slug: 'health',
      description: 'Fitness, wellness, and healthcare applications.',
    },
    {
      name: 'Social',
      slug: 'social',
      description: 'Messaging, communities, and social networking applications.',
    },
    {
      name: 'Technology',
      slug: 'technology',
      description: 'Developer tools, productivity, and modern technology platforms.',
    },
  ],
};
