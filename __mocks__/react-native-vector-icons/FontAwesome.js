import React from 'react';

function mockComponent(name: string): Function {
  return (props: Object) => React.createElement(name, props, props.children);
}

const Icon = mockComponent('Icon');
Icon.ToolbarAndroid = mockComponent('Icon.Button');

export default Icon;

export const ToolbarAndroid = Icon.ToolbarAndroid;
