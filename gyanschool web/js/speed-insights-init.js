/**
 * Vercel Speed Insights Initialization
 * 
 * This file initializes Vercel Speed Insights for tracking web vitals
 * and performance metrics in production.
 */

import { injectSpeedInsights } from './speed-insights.mjs';

// Initialize Speed Insights
// The script will only track data in production environments
injectSpeedInsights({
    debug: false, // Set to true for debugging in development
});
