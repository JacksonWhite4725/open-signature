FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the entire service
COPY services/auth-service ./

# Install dependencies without requiring the lockfile
RUN pnpm install --no-frozen-lockfile

# Expose port 4000
EXPOSE 4000

# Start the development server
CMD ["pnpm", "dev"]