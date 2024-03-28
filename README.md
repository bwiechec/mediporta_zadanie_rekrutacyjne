# Recruitment task

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Description

The goal of the task was to implement React app using stackexchange API endpoint. Endpoint returns StackOverflow tags.

## Installation

To install the app run

```
npm ci
```

To start the app run

```
npm start
```

To run Storybook use

```
npm run storybook
```

To run tests use

```
npm test
```

## Usage

|                                                                                     |                                                                                                       |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|                   _1. Home page_ ![home page](docs/home-page.png)                   |                 _2. Loading tag(s)_ ![loading product(s)](docs/loading-next-page.png)                 |
|     _3. Diffrent page size_ ![diffrent page size](docs/diffrent-page-size.png)      |           _4. No tags found info with error shown_ ![no-tags-found](docs/no-tags-found.png)           |
| _5. Example error message_ ![example-error-message](docs/example-error-message.png) | _6. loading after no tags found_ ![loading-after-no-tags-found](docs/loading-after-no-tags-found.png) |

## Features

- Fetching data from API endpoint
- Switch between diffrent items per page numbers
- Go through tag pages using pagination
- Sort data clicking on column name
- Storing sort column, sort order, page size and current page in URL
