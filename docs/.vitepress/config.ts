import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code, Done Right',
  description: "The 12 features that matter most for AI-native development",

  base: '/claude-code-done-right/',

  appearance: 'force-dark',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Claude Code, Done Right',

    nav: [
      {
        text: 'v1 (current)',
        items: [
          { text: 'All Features', link: '/features/' },
        ]
      },
    ],

    sidebar: {
      '/features/': [
        { text: '← Home', link: '/' },
        { text: 'All Features', link: '/features/' },
        {
          text: 'Features',
          collapsed: false,
          items: [
          { text: 'CLAUDE.md', link: '/features/1-claude' },
          { text: 'Permissions', link: '/features/2-permissions' },
          { text: 'Plan Mode', link: '/features/3-plan-mode' },
          { text: 'Checkpoints', link: '/features/4-checkpoints' },
          { text: 'Skills', link: '/features/5-skills' },
          { text: 'Hooks', link: '/features/6-hooks' },
          { text: 'MCP', link: '/features/7-mcp' },
          { text: 'Plugins', link: '/features/8-plugins' },
          { text: 'Context Management', link: '/features/9-context-management' },
          { text: 'Compaction', link: '/features/10-compaction' },
          { text: 'Slash Commands', link: '/features/11-slash-commands' },
          { text: 'Sub-agents', link: '/features/12-sub-agents' },
          ]
        },
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/salayhin/claude-code-done-right' }
    ],

    footer: {
      message: 'The AI Native Architect @salayhin'
    }
  }
})
