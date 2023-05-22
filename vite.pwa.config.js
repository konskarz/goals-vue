export default {
  // useCredentials: true,
  // devOptions: { enabled: true },
  registerType: 'autoUpdate',
  injectRegister: 'inline',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
    navigateFallbackAllowlist: [/^index.html$/]
  },
  includeAssets: [
    'icons/favicon.ico',
    'icons/apple-icon-120x120.png',
    'icons/safari-pinned-tab.svg'
  ],
  manifest: {
    name: 'LifeTrackerBuddy',
    short_name: 'Goals',
    description:
      'An advanced task manager with main focus on the goal, goal achievement and its current progress',
    theme_color: '#027be3',
    // orientation: 'portrait',
    display: 'standalone',
    background_color: '#ffffff',
    icons: [
      {
        src: 'icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: 'icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      },
      {
        src: 'icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: 'icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
