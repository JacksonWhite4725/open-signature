FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the entire web directory
COPY apps/web ./

# Install dependencies without requiring the lockfile
RUN pnpm install --no-frozen-lockfile

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["pnpm", "dev"]