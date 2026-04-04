# Vercel Speed Insights Setup

This document explains how Vercel Speed Insights has been configured for the GyanSchool project.

## What is Vercel Speed Insights?

Vercel Speed Insights automatically monitors web vitals and performance metrics for your website, providing data-driven insights to optimize user experience. It tracks Core Web Vitals including:

- **FCP** (First Contentful Paint)
- **LCP** (Largest Contentful Paint)
- **CLS** (Cumulative Layout Shift)
- **FID** (First Input Delay)
- **TTFB** (Time to First Byte)

## Installation

The `@vercel/speed-insights` package (v2.0.0) has been installed:

```bash
npm install @vercel/speed-insights
```

## Implementation

### Files Added/Modified:

1. **package.json** - Added @vercel/speed-insights dependency
2. **js/speed-insights.mjs** - The Speed Insights library module
3. **js/speed-insights-init.js** - Initialization script that calls `injectSpeedInsights()`
4. **index.html** - Added script tag to load Speed Insights

### How It Works:

The Speed Insights script is loaded as an ES module in the HTML head:

```html
<!-- Vercel Speed Insights -->
<script type="module" src="js/speed-insights-init.js"></script>
```

The initialization script imports and calls the `injectSpeedInsights()` function:

```javascript
import { injectSpeedInsights } from './speed-insights.mjs';

injectSpeedInsights({
    debug: false, // Set to true for debugging
});
```

## Important Notes

### Production Only
⚠️ **Speed Insights does NOT track data in development mode.** It only functions in production builds deployed to Vercel. This is by design to ensure clean production-only analytics.

### Enabling in Vercel Dashboard

Before you can see data, you must:

1. Deploy your site to Vercel
2. Go to your project in the Vercel Dashboard
3. Navigate to the "Speed Insights" tab in the sidebar
4. Click the "Enable" button

Once enabled, the Speed Insights routes will be added to your deployment and data collection will begin automatically.

## Viewing Metrics

After deployment and user visits:

1. Visit your Vercel Dashboard
2. Select your project
3. Navigate to "Speed Insights"
4. View performance metrics, geographic data, and Core Web Vitals

Data will appear after a few days of traffic collection.

## Configuration Options

You can customize Speed Insights by modifying the options in `js/speed-insights-init.js`:

```javascript
injectSpeedInsights({
    debug: false,           // Enable debug logging
    sampleRate: 1,          // Track 100% of pageviews (0.5 = 50%)
    route: '/custom-route', // Override automatic route detection
    beforeSend: (data) => { // Modify data before sending
        // Filter or modify events
        return data;
    }
});
```

## Additional Resources

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Core Web Vitals Guide](https://web.dev/vitals/)

## Support

For issues or questions about Speed Insights, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://vercel.com/community)
