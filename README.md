
# E-Commerce Testing - Group 4

[![CI - Automated Testing](https://github.com/NavinduAmerasinghe/ecommerce-testing-group4/actions/workflows/ci.yml/badge.svg)](https://github.com/NavinduAmerasinghe/ecommerce-testing-group4/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/NavinduAmerasinghe/ecommerce-testing-group4/badge.svg?branch=main)](https://coveralls.io/github/NavinduAmerasinghe/ecommerce-testing-group4?branch=main)

## Project Overview

This repository contains the automated tests developed for the Software Testing course at Tampere University.

The project focuses on testing selected utility functions from an e-commerce application library.

## Testing Tools

| Tool | Purpose |
|---|---|
| Mocha | Test execution |
| Chai | Assertions |
| c8 | Code coverage measurement |
| GitHub Actions | Continuous Integration |
| Coveralls | Coverage reporting |

## Running the Tests Locally

Install dependencies:

```bash
npm ci
```

Run the test suites:

```bash
npm test
```

Generate the coverage report:

```bash
npm run coverage
```

The HTML coverage report is generated in the `coverage/` directory.

## Continuous Integration

GitHub Actions automatically runs the test suites and generates a coverage report when changes are pushed to the `main` branch or when a pull request targets `main`.

Coverage reports are uploaded to Coveralls.

## Coverage Target

The assignment targets at least 90% branch coverage for each of the ten selected utility functions.

## Repository Information

- Course: Software Testing
- University: Tampere University
- Group: 4
- Repository: [ecommerce-testing-group4](https://github.com/NavinduAmerasinghe/ecommerce-testing-group4)

## Licence Notice

The source code folder contains a separate license file that must **NOT** be removed or modified under any circumstances. Removing or modifying this file directly violates the terms and conditions of the software under testing.
