import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    // Do not silently move the app to another URL when an old dev server is
    // still running. A clear startup error is much easier to diagnose.
    strictPort: true,
  },
});
