// API Specification for Data-driven DevOps Pipeline Parser

const pipelineParserApi = {
  name: "RKYI DevOps Pipeline Parser",
  version: "1.0.0",
  endpoint: "/parse",
  methods: {
    parsePipeline: {
      method: "POST",
      description: "Parse a DevOps pipeline configuration file",
      parameters: {
        pipelineConfig: {
          type: "string",
          description: "Pipeline configuration file content",
          required: true
        },
        pipelineType: {
          type: "string",
          description: "Type of pipeline (e.g. Jenkins, GitLab, Azure)",
          required: true
        }
      },
      responses: {
        200: {
          description: "Parsed pipeline data",
          schema: {
            type: "object",
            properties: {
              stages: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    jobs: { type: "array", items: { type: "string" } }
                  }
                }
              },
              variables: {
                type: "object",
                properties: {
                  env: { type: "array", items: { type: "string" } },
                  params: { type: "array", items: { type: "string" } }
                }
              }
            }
          }
        },
        400: {
          description: "Invalid pipeline configuration"
        },
        500: {
          description: "Internal server error"
        }
      }
    }
  }
};

export default pipelineParserApi;