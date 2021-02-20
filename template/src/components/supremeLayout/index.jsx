import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function SupremeLayout(props) {
  const el = document.createElement('div');
  useEffect(() => {
    if (!el) return;
    document.getElementById('supreme')?.appendChild(el);
    return () => {
      document.getElementById('supreme')?.removeChild(el);
    };
  }, [el]);
  return ReactDOM.createPortal(props.children, el);
}
