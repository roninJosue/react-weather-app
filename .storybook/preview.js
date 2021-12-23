import {MINIMAL_VIEWPORTS} from "@storybook/addon-viewport";

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      height: '963px',
      width: '600px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
  }
}