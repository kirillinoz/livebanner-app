# LiveBanner (Broken, no Twitter API)
[Demo](https://livebanner.netlify.app) (Broken, no Twitter API) | [Code](https://github.com/kirillinoz/livebanner-app)

## Overview
LiveBanner was a web application for creating dynamic banners for your Twitter profile. The banner would change according to the amount of followers your account has. You could set up different step ranges, change colors and add text to the banner.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Folder Structure](#folder-structure)
* [Packages Used](#packages-used)

## Installation
1) `git clone https://github.com/kirillinoz/livebanner-app.git`
2) `cd livebanner-app`
3) `npm install`

## Usage
1) Create .env file
2) Add `FIREBASE_API_KEY`, `SUPABASE_ANON_KEY` and `SUPABASE_URL` (No need anymore)
3) `npm run start`
4) Open your browser and go to http://localhost:3000

## Folder Structure
```bash
- /assets
  - /css
  - /demo
  - /scripts
  - /templates
- /components
- /content
- /layouts
- /pages
- /plugins
- /static
- /store
```
## Packages Used
```bash
livebanner-app@1.0.0
├── @nuxt/content@1.15.1
├── @nuxtjs/axios@5.13.6
├── @nuxtjs/google-fonts@1.3.0
├── @nuxtjs/tailwindcss@4.2.1
├── @supabase/supabase-js@1.35.7
├── core-js@3.33.3
├── eslint-config-prettier@8.10.0
├── firebase@9.23.0
├── hex-to-css-filter@5.4.0
├── nuxt@2.17.2
├── postcss@8.4.31
├── prettier@2.8.8
├── vue-server-renderer@2.7.15
├── vue-template-compiler@2.7.15
├── vue@2.7.15
└── webpack@4.47.0
```
