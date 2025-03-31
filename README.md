# Restaurant Management System - Client

A modern web application for managing restaurant operations, built with React, TypeScript, and Vite.

## Features

- User authentication and authorization
- Menu management
- Order processing
- Table management
- Inventory tracking
- Employee management
- Real-time updates
- Responsive design

## Tech Stack

- React 19
- TypeScript
- Vite
- Mantine
- React Router
- Axios
- React Query

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
## Available Routes

### Authentication Routes

- `/login` - Login page
- `/login/forgot-password` - Forgot password page
- `/signup` - Sign up page

### Dashboard Routes

- `/dashboard` - Main dashboard
- `/dashboard/menu/menu` - Menu management
- `/dashboard/orders` - Orders management
- `/dashboard/bookings` - Bookings management
- `/dashboard/customer` - Customer management
- `/dashboard/customer-services` - Customer services
- `/dashboard/website` - Website settings
- `/dashboard/promo-offers` - Promotional offers
- `/dashboard/my-business` - Business settings

### Other Settings Routes

- `/dashboard/other-settings/surcharge-fees` - Surcharge fees configuration
- `/dashboard/other-settings/miscellaneous` - Miscellaneous settings
- `/dashboard/other-settings/ordering` - Ordering settings
- `/dashboard/other-settings/audio-notifications` - Audio notifications settings
- `/dashboard/other-settings/tipping` - Tipping settings
- `/dashboard/other-settings/printer` - Printer settings
- `/dashboard/other-settings/age-verification` - Age verification settings
- `/dashboard/other-settings/customer-account` - Customer account settings
- `/dashboard/other-settings/email-notifications` - Email notifications settings
- `/dashboard/other-settings/policies` - Policies settings

## File Naming Conventions

All files and folders should use kebab-case (lowercase letters with hyphens).

### Components

- Use kebab-case for component files and folders
- All React component files should end with `.component.tsx`
- Example: `user-profile.component.tsx`, `order-list.component.tsx`
- Example structure:
```

components/
├── user-profile/
│ ├── user-profile.component.tsx
│ ├── user-profile.module.scss
│ └── user-profile.types.ts

````

### Hooks

- Use kebab-case with 'use' prefix
- Example: `use-auth.ts`, `use-orders.ts`

### Utils and Services

- Use kebab-case for utility and service files
- Example: `api-client.ts`, `date-formatter.ts`

### Types and Interfaces

- Use kebab-case for type definition files
- Example: `user.types.ts`, `order.types.ts`

### Styles

- Use kebab-case for style files
- All style files should end with `.module.scss`
- Example: `button.module.scss`, `layout.module.scss`

### Tests

- Match the name of the file being tested with `.test` or `.spec` suffix
- Example: `user-profile.component.test.tsx`, `use-auth.spec.ts`

### Pages

- Use kebab-case for page components
- Example: `home-page.component.tsx`, `orders-page.component.tsx`

### Assets

- Use kebab-case for image and other asset files
- Example: `hero-image.png`, `company-logo.svg`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd restaurant-management-system-client
````

2. Install dependencies:

````js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```bash
npm install
# or
yarn install
````

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_API_URL=your_api_url
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
