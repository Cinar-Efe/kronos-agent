# Kronos Usage Examples

## Basic Usage

```bash
# Generate content for all platforms
kronos ship --release v1.0.0
```

## Specific Language

```bash
# French content
kronos ship --release v1.0.0 --language fr

# German content
kronos ship --release v1.0.0 --language de
```

## Specific Platforms Only

```bash
# Twitter and LinkedIn only
kronos ship --release v1.0.0 --platforms twitter,linkedin

# Just the changelog
kronos ship --release v1.0.0 --platforms changelog
```

## Custom Tone

```bash
# Excited tone for big releases
kronos ship --release v2.0.0 --tone excited

# Professional tone for enterprise
kronos ship --release v1.5.0 --tone professional
```

## Custom Output Directory

```bash
kronos ship --release v1.0.0 --output ./my-release-content
```

## CI/CD Pipeline (GitHub Actions)

```yaml
- name: Ship Release
  run: kronos ship --release ${{ github.event.release.tag_name }}
  env:
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
```