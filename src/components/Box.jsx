import styled from 'styled-components';
import {
  color,
  space,
  layout,
  typography,
  flexbox,
  border,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  typography,
  flexbox,
  border,
  shadow
);

// export default {
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
// };
