var ROOT = './';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './components/appContainer';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

render(
	<AppContainer userAgent={AppSetting.userAgent} />, document.getElementById('main')
);
