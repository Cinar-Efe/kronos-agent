# Kronos Usage Examples

## Basic Usage

    kronos ship --release v1.0.0

## Specific Language

    kronos ship --release v1.0.0 --language fr
    kronos ship --release v1.0.0 --language de

## Specific Platforms Only

    kronos ship --release v1.0.0 --platforms twitter,linkedin
    kronos ship --release v1.0.0 --platforms changelog

## Custom Tone

    kronos ship --release v2.0.0 --tone excited
    kronos ship --release v1.5.0 --tone professional

## Custom Output Directory

    kronos ship --release v1.0.0 --output ./my-release-content
