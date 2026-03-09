import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import * as fs from 'fs/promises';
import * as path from 'path';

class FileSystemMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'mcp-filesystem',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  private setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'read_file',
            description: 'Read contents of a file',
            inputSchema: {
              type: 'object',
              properties: {
                path: {
                  type: 'string',
                  description: 'Path to the file to read',
                },
              },
              required: ['path'],
            },
          },
          {
            name: 'write_file',
            description: 'Write content to a file',
            inputSchema: {
              type: 'object',
              properties: {
                path: {
                  type: 'string',
                  description: 'Path to the file to write',
                },
                content: {
                  type: 'string',
                  description: 'Content to write',
                },
              },
              required: ['path', 'content'],
            },
          },
          {
            name: 'list_directory',
            description: 'List files in a directory',
            inputSchema: {
              type: 'object',
              properties: {
                path: {
                  type: 'string',
                  description: 'Path to directory',
                },
              },
              required: ['path'],
            },
          },
          {
            name: 'file_exists',
            description: 'Check if a file exists',
            inputSchema: {
              type: 'object',
              properties: {
                path: {
                  type: 'string',
                  description: 'Path to check',
                },
              },
              required: ['path'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'read_file': {
            const content = await fs.readFile(args.path as string, 'utf-8');
            return { content: [{ type: 'text', text: content }] };
          }
          case 'write_file': {
            await fs.writeFile(args.path as string, args.content as string);
            return { content: [{ type: 'text', text: 'File written successfully' }] };
          }
          case 'list_directory': {
            const files = await fs.readdir(args.path as string);
            return { content: [{ type: 'text', text: JSON.stringify(files, null, 2) }] };
          }
          case 'file_exists': {
            try {
              await fs.access(args.path as string);
              return { content: [{ type: 'text', text: 'true' }] };
            } catch {
              return { content: [{ type: 'text', text: 'false' }] };
            }
          }
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error: ${error}` }],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('MCP FileSystem Server running on stdio');
  }
}

const server = new FileSystemMCPServer();
server.run().catch(console.error);
