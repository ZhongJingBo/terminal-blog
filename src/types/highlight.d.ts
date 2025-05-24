declare module 'highlight.js/lib/languages/javascript' {
  const javascript: any;
  export default javascript;
}

declare module 'react-lowlight' {
  import { ComponentType } from 'react';

  interface LowlightProps {
    language?: string;
    value: string;
    markers?: any[];
  }

  const Lowlight: ComponentType<LowlightProps> & {
    registerLanguage: (name: string, language: any) => void;
  };

  export default Lowlight;
} 