# Infinite Scroll Select Dropdown

## Overview

Infinite Scroll Select Dropdown is a dynamic and user-friendly UI component for web applications. It enhances the traditional select dropdown by introducing infinite scrolling capabilities, allowing users to seamlessly browse through a large dataset. This project integrates with the `https://dummyjson.com` API to fetch paginated data, providing a smooth and continuous scrolling experience. Additionally, it supports a search filter, enabling users to easily find the options they are looking for.

## Features

- **Infinite Scrolling**: Dynamically loads data as the user scrolls, perfect for handling large datasets.
- **API Integration**: Fetches paginated data from `https://dummyjson.com`, ensuring up-to-date and relevant options.
- **Search Filter**: Includes a search function to quickly filter dropdown options based on user input.
- **Responsive Design**: Adapts to various screen sizes and devices for a consistent user experience.

## Getting Started

### Prerequisites

- Node.js
- NPM or Yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Steph-crown/infinite-scroll-select-dropdown.git

```

2. Navigate to the project directory:

```sh
cd infinite-scroll-select-dropdown

```

3. Install dependencies:

```sh
npm install

```

or

```sh
yarn install
```

### Usage

To start the project, run:

```sh
npm start
```

or

```sh
yarn start
```

This will launch the application in your default web browser.

## How It Works

The dropdown component initializes by fetching the first set of data from the `https://dummyjson.com` API. As the user scrolls through the dropdown, it detects when the end of the list is approaching and fetches the next set of data, appending it to the existing options. The search filter functionality allows users to type in a query, which filters the displayed options based on their input.
