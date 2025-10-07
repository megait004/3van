import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        lightningcssLoader: true
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    }
});
