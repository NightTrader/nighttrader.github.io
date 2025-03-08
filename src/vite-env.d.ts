declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}

declare module "*.css";

/// <reference types="vite/client" />
