export const fetchCharactersSchema = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              species: { type: 'string' },
              image: { type: 'string' },
              location: {
                type: 'object',
                properties: {
                  name: { type: 'string' }
                },
              }
            },
          }
        },
        404: {
          type: 'object',
          properties: {
            status: { type: 'integer' },
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          },
        },
        500: {
          type: 'object',
          properties: {
            status: { type: 'integer' },
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          },
        }
      }
    }
  }
 
export const searchCharactersSchema = {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        },
      },
      headers: {
        type: 'object',
        properties: {
          email: { type: 'string' }
        },
      },
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              species: { type: 'string' },
              image: { type: 'string' },
              location: {
                type: 'object',
                properties: {
                  name: { type: 'string' }
                },
              }
            },
          }
        },
        400: {
          type: 'object',
          properties: {
            status: { type: 'integer' },
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          },
        },
        500: {
          type: 'object',
          properties: {
            status: { type: 'integer' },
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          },
        }
      }
    }
  };
  