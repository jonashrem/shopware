/* global require */
import { configure } from '@storybook/vue';

/** Import global styles */
import 'src/app/assets/less/all.less';

function loadStories() {
    // You can require as many stories as you need.
    require('../stories/sw-alert/index');
    require('../stories/sw-button/index');
    require('../stories/sw-card/index');
    require('../stories/sw-field/index');
    require('../stories/sw-grid/index');
    require('../stories/sw-icon/index');
    require('../stories/sw-loader/index');
}

configure(loadStories, module);