import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={230}
    height={320}
    viewBox="0 0 230 320"
    backgroundColor="#e6e6e6"
    foregroundColor="#ffffff"
    {...props}>
    <rect x="36" y="16" rx="0" ry="0" width="148" height="205" />
    <rect x="28" y="234" rx="0" ry="0" width="165" height="17" />
    <rect x="106" y="264" rx="0" ry="0" width="86" height="13" />
    <rect x="32" y="294" rx="0" ry="0" width="79" height="13" />
  </ContentLoader>
);

export default Skeleton;
