import type { MetadataRoute } from 'next';
import { site, isPreview } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // 27 major AI bots & search engine crawlers per best-aeo-skill & marketing-skills
  const allowedAiAndSearchBots = [
    // OpenAI
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    // Anthropic
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'Claude-User',
    'Claude-SearchBot',
    // Perplexity
    'PerplexityBot',
    'Perplexity-User',
    // Google (Search + AI Overviews / Gemini training & grounding)
    'Googlebot',
    'Google-Extended',
    'GoogleOther',
    // Apple
    'Applebot',
    'Applebot-Extended',
    // Meta
    'FacebookBot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    // Common Crawl & Others
    'CCBot',
    'cohere-ai',
    'MistralAI-User',
    'Bytespider',
    'Diffbot',
    'Amazonbot',
    'DuckDuckBot',
    'Bingbot',
    'YandexBot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: allowedAiAndSearchBots,
        allow: '/',
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}

