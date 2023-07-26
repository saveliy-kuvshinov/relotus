import type { StorybookConfig } from '@storybook/core-common';
import { rootMain } from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,

  stories: [...rootMain.stories, '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...(rootMain.addons || []), '@nrwl/react/plugins/storybook', 'storybook-addon-designs'],
  webpackFinal: (webpackConfig) => {
    // add your own webpack tweaks if needed
    return webpackConfig;
  },
};

module.exports = config;
