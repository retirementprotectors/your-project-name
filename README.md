# React TypeScript Template

A modern React TypeScript template with Material-UI, Redux Toolkit, and React Router.

## Features

- 🎨 Material-UI components and theming
- 📦 Redux Toolkit for state management
- 🚦 React Router for navigation
- 🌙 Dark mode support
- 📱 Responsive layout
- 🔒 Authentication ready
- 🚀 API client setup
- 📝 TypeScript support
- 🧪 Testing setup
- 🎯 ESLint + Prettier configuration

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── api/          # API client and endpoints
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── store/        # Redux store and slices
└── utils/        # Utility functions
```

## Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:9000
```

## Authentication

The template includes a basic authentication setup:

1. Login/Logout functionality
2. Protected routes
3. Token management
4. Axios interceptors for auth headers

## State Management

Redux Toolkit is configured with:

1. Auth slice for user authentication
2. UI slice for theme and notifications
3. Type-safe hooks and actions
4. Redux DevTools integration

## Styling

Material-UI is set up with:

1. Custom theme configuration
2. Dark mode support
3. Responsive layout components
4. CSS-in-JS with emotion

## Testing

Jest and React Testing Library are configured for:

1. Component testing
2. Hook testing
3. Redux state testing
4. API mocking

## Deployment

The template includes GitHub Actions workflows for:

1. Continuous Integration
   - Linting
   - Testing
   - Building
   - Coverage reports

2. Continuous Deployment
   - AWS S3 deployment
   - CloudFront invalidation
   - Environment-specific builds

## Best Practices

1. **Code Organization**
   - One component per file
   - Feature-based directory structure
   - Shared components in `components/`
   - Pages in `pages/`

2. **State Management**
   - Use Redux for global state
   - Use local state for UI
   - Use React Query for API state
   - Type all state interfaces

3. **Performance**
   - Lazy loading routes
   - Memoization with `useMemo` and `useCallback`
   - Code splitting
   - Bundle size optimization

4. **Security**
   - Environment variables
   - HTTPS enforcement
   - Token management
   - XSS prevention

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT 