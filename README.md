![simple-product-lister](https://img.shields.io/badge/simple-product-lister?style=flat&logo=github&logoColor=white&label=build&link=https%3A%2F%2Fgithub.com%2Fvluv99%2Fsimple-product-lister
)

# Product Catalog

A simple product catalog to list and display detailed info about products.

## Features
- Optimized for multiple screen sizes using TailwindCSS.
- Dynamically loads more products as the user scrolls.
- Displays product summaries in a grid format, with 4 items per row.
- A dedicated page showcasing full product details, including images, pricing, discount, stock, brand, category, and rating.
- REST API Integration - backend service providing structured product data via API.
- Pagination Support – use skip and limit query parameters for efficient data fetching (default limit set to 10).
- Database Seeding – script to prepopulate the database with 100 sample products.

## Tech Stack
- **Next.js**: Framework for building React applications with server-side rendering and static site generation.
- **React**: Library for building user interfaces.
- **Tailwind**: For styling the application.
- **PostgreSQL**: Object-relational database system.
- **Prisma ORM**: Simplified database query helper

## Initial designs
All products page:
![All Products.png](.github/imgs/All%20Products.png)

One product page:
![One Product.png](.github/imgs/One%20Product.png)

##Getting started
1. Make sure **npm**, **Git**, **NodeJS** and **Podman** (or docker) are installed on your computer.
2. Clone this project to your local computer.
3. Run `npm install` in the project directory to install packages.
4. Run `podman compose up` (replace podman with docker if needed) to start database.
5. Run `npm run dev` to start up local dev version.
6. Go to url 'http://localhost:300/api/init-mock-data' to fill up database with mock values.
7. Open application at 'http://localhost:3000' and you can start browsing!
