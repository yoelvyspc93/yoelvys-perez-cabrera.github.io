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
};

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    default: 'dark',
    value: [
      {
        name: 'dark',
        value: '#1D212C',
      },
    ],
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
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
