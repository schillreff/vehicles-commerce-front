import 'animate.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
  width: 12px;height: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-brand3);
  border-radius: 20px; 
}

  :root {
    --color-brand1: #4529E6;
    --color-brand2: #5126EA;
    --color-brand3: #B0A6F0;
    --color-brand4: #EDEAFD;

    --color-gray0: #0B0D0D;
    --color-gray1: #212529;
    --color-gray2: #495057;
    --color-gray3: #868E96;
    --color-gray4: #ADB5BD;
    --color-gray5: #CED4DA;
    --color-gray6: #DEE2E6;
    --color-gray7: #E9ECEF;
    --color-gray8: #F1F3F5; 
    --color-gray9: #F8F9FA;
    --color-gray10:#FDFDFD;

    --color-white: #FFFFFF;

    --color-alert1: #CD2B31;
    --color-alert2: #FDD8D8;
    --color-alert3: #FFE5E5;

    --color-sucess1: #18794E;
    --color-sucess2: #CCEBD7;
    --color-sucess3: #DDF3E4;

    --color-random1: #E34D8C;
    --color-random2: #C04277;
    --color-random3: #7D2A4D;
    --color-random4: #7000FF;
    --color-random5: #6200E3;
    --color-random6: #36007D;
    --color-random7: #349974;
    --color-random8: #2A7D5F;
    --color-random9: #153D2E;
    --color-random10: #6100FF;
    --color-random11: #5700E3;
    --color-random12: #30007D;

    --font-family1: "Lexend", sans-serif;
    --font-family2: "Inter", sans-serif;
  } 
`;
