# MCP Tools Collection

A curated collection of useful Model Context Protocol (MCP) servers and tools for AI agents and applications.

## 🌟 Popular MCP Servers

### 🔧 Developer Tools

| Server | Description | npm Install |
|--------|-------------|-------------|
| [filesystem](https://github.com/modelcontextprotocol/server-filesystem) | File system operations | `npx @modelcontextprotocol/server-filesystem` |
| [GitHub](https://github.com/github/github-mcp-server) | GitHub API integration | `npx @github/mcp-server` |
| [Playwright](https://github.com/microsoft/playwright-mcp) | Browser automation | `npx @playwright/mcp-server` |
| [Brave Search](https://github.com/brave-experiments/brave-search-mcp) | Web search | `npx @brave/mcp-server` |
| [notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Google NotebookLM API | `pip install notebooklm-py` |

### 🗄️ Databases

| Server | Description | npm Install |
|--------|-------------|-------------|
| [SQLite](https://github.com/modelcontextprotocol/server-sqlite) | SQLite database | `npx @modelcontextprotocol/server-sqlite` |
| [PostgreSQL](https://github.com/modelcontextprotocol/server-postgres) | PostgreSQL database | `npx @modelcontextprotocol/server-postgres` |
| [Redis](https://github.com/RedisVentures/redis-mcp-server) | Redis cache & store | `npx @redisventures/redis-mcp-server` |

### 🧠 Memory & Knowledge

| Server | Description | npm Install |
|--------|-------------|-------------|
| [Memory](https://github.com/modelcontextprotocol/server-memory) | Persistent memory | `npx @modelcontextprotocol/server-memory` |
| [Knowledge Graph](https://github.com/neo4j-labs/mcp-server) | Neo4j knowledge graph | `npx @neo4j-labs/mcp-server` |
| [Context7](https://github.com/upstash/context7) | Up-to-date code docs for LLMs | `npx @upstash/context7` |

### 📡 Communication

| Server | Description | npm Install |
|--------|-------------|-------------|
| [Slack](https://github.com/slackhq/bolt-js/tree/main/packages/mcp-server) | Slack integration | `npx @slack/mcp-server` |
| [Discord](https://github.com/eriknix/mcp-discord) | Discord bot | `npx @eriknix/mcp-discord` |
| [Gmail](https://github.com/charles-m-taylor/gmail-mcp) | Gmail API | `npx @charles-m-taylor/gmail-mcp` |

### 🇨🇳 Chinese Ecosystem

| Server | Description | Install |
|--------|-------------|---------|
| [wechat-mcp-server](https://github.com/553226713/wechat-mcp-server) | WeChat/Massbot automation | `npm i wechat-mcp-server` |
| [china-ai-api](https://github.com/553226713/china-ai-api) | Unified Chinese AI APIs (DeepSeek, Kimi, Zhipu, etc.) | `npm i china-ai-api` |

### ☁️ Cloud Services

| Server | Description | npm Install |
|--------|-------------|-------------|
| [AWS KB Retrieval](https://github.com/awslabs/mcp-server-aws-kb-retrieval-server) | AWS Knowledge Base | `npx @aws/mcp-server-aws-kb-retrieval` |
| [AWS Lambda](https://github.com/awslabs/mcp-server-aws-lambda) | AWS Lambda invoke | `npx @aws/mcp-server-aws-lambda` |
| [Google Drive](https://github.com/eriknix/mcp-google-drive) | Google Drive files | `npx @eriknix/mcp-google-drive` |

### 🎨 Media & Vision

| Server | Description | npm Install |
|--------|-------------|-------------|
| [Puppeteer](https://github.com/modelcontextprotocol/server-puppeteer) | Web scraping | `npx @modelcontextprotocol/server-puppeteer` |
| [Image Generation](https://github.com/anthropics/anthropic-sdk-python) | AI image generation | `npx @anthropic/mcp-image` |

## 🚀 Quick Start

### Using with Claude Code

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed directory"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@github/mcp-server"]
    }
  }
}
```

### Using with OpenClaw

Add to your OpenClaw configuration:

```yaml
mcp:
  servers:
    - name: filesystem
      command: npx
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    - name: github
      command: npx
      args: ["-y", "@github/mcp-server"]
```

## 📚 Resources

- [Official MCP Documentation](https://modelcontextprotocol.io/)
- [MCP Servers Directory](https://glama.ai/mcp/servers)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

## 🤝 Contributing

Contributions welcome! Please submit a PR.

## 📝 License

MIT
