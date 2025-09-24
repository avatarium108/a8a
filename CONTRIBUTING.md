# Contributing to A8A

Thank you for your interest in contributing to A8A! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/a8a.git
   cd a8a
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual Supabase credentials
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming Convention

- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring

### Code Quality

Before submitting a pull request, ensure your code passes all checks:

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Build the project
npm run build
```

### Commit Messages

Follow conventional commit format:
- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update README`
- `style: format code`
- `refactor: restructure component`
- `test: add unit tests`
- `chore: update dependencies`

## Pull Request Process

1. Create a new branch from `main`
2. Make your changes
3. Add tests if applicable
4. Update documentation if needed
5. Ensure all checks pass
6. Submit a pull request with:
   - Clear title and description
   - Reference to related issues
   - Screenshots for UI changes

## Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── types/         # TypeScript type definitions
└── styles/        # Global styles
```

## Testing

- Write unit tests for utility functions
- Add integration tests for complex components
- Test responsive design on different screen sizes
- Verify accessibility compliance

## Reporting Issues

When reporting bugs, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS information
- Screenshots if applicable

## Questions?

Feel free to open an issue for questions or join our community discussions.

Thank you for contributing! 🚀
