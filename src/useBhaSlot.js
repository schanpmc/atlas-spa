import { useEffect } from 'react';

const useBhaSlot = ({ size, divid }) => {
  useEffect(() => {
    const blogherads = window.blogherads || {};
    blogherads.adq = blogherads.adq || [];
    blogherads.adq.push([size, divid]);
  }, [size, divid]);
};

export { useBhaSlot };