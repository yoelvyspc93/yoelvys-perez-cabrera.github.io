import '@/styles/app.scss';
import '@/styles/storybook.scss';

import type { Preview } from "@storybook/react";

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '376px',
      height: '768px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '768px',
    },
  },
  widescreen: {
    name: 'Widescreen',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  fullscreen: {
    name: 'Fullscreen',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
};

const preview: Preview = {
  // tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#1e1e1e',
        },
      ],
      disable: true,
      grid: {
        disable: true,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'fullscreen',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
