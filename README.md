# uply

Simple, fast and minimal status pages for modern apps.

## Configuration

Edit `config/endpoints.json` before building:

```json
{
  "title": "My App",
  "endpoints": [
    { "name": "Website", "url": "https://example.com" },
    { "name": "API", "url": "https://api.example.com/health" }
  ]
}
```

- `title` - Appears as "My App System Status" on the page
- `endpoints` - Array of services to check
  - `name` - Display name
  - `url` - Health check URL (any endpoint that returns 2xx)

## Docker

### Run with Docker Compose

```bash
docker compose up --build -d
```