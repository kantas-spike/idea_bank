const path = require("path");
const theme_dir = path.basename(__dirname);
const defaultTheme = require("tailwindcss/defaultTheme");
const { key_colors, tones } = require("./lib/color_system");

module.exports = {
  content: [
    `./hugo_stats.json`,
    `./themes/${theme_dir}/assets/**/*.{js,jsx,css}`,
    "./assets/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tones: {
          ...tones,
        },
        primary: {
          DEFAULT: tones.P_40,
          container: tones.P_90,
        },
        secondary: {
          DEFAULT: tones.S_40,
          container: tones.S_90,
        },
        tertiary: {
          DEFAULT: tones.T_40,
          container: tones.T_90,
        },
        error: {
          DEFAULT: tones.E_40,
          container: tones.E_90,
        },
        link: {
            DEFAULT: tones.S_40,
            hover: tones.S_30,
            visited: tones.S_20,
        },
        focused: {
          DEFAULT: key_colors.focused.hex(),
        },
        disabled: {
          DEFAULT: tones.D_40,
        },
        surface: {
          dim: tones.N_87,
          DEFAULT: tones.N_98,
          bright: tones.N_98,
          container: {
            lowest: tones.N_100,
            low: tones.N_96,
            DEFAULT: tones.N_94,
            high: tones.N_92,
            highest: tones.N_90,
          },
        },
        outline: {
          DEFAULT: tones.NV_50,
          variant: tones.NV_80,
        },
        inverse: {
          primary: tones.P_80,
          surface: tones.N_20,
        },
        background: {
          DEFAULT: tones.N_60,
        },
        shadow: {
          DEFAULT: tones.N_0,
        },
        surface_tint: {
          DEFAULT: tones.P_40,
        },
        scrim: {
          DEFAULT: tones.N_0,
        },
        on: {
          primary: {
            DEFAULT: tones.P_100,
            container: tones.P_10,
          },
          secondary: {
            DEFAULT: tones.S_100,
            container: tones.S_10,
          },
          tertiary: {
            DEFAULT: tones.T_100,
            container: tones.T_10,
          },
          error: {
            DEFAULT: tones.E_100,
            container: tones.E_10,
          },
          disabled: {
            DEFAULT: tones.D_94,
          },
          surface: {
            DEFAULT: tones.N_10,
            variant: tones.NV_30,
          },
          inverse: {
            surface: tones.N_95,
          },
          background: {
            DEFAULT: tones.N_10,
          },
        },
      },
      lineHeight: {
        's': '1.4',
        'm': '1.5',
        'l': '1.7',
      },
      letterSpacing: {
        's': '0.02rem',
        'm': '0.04rem'
      },
      spacing: {
        '3xs': '2px',
        '2xs': '4px',
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '40px',
        'xl': '64px',
      },
      aspectRatio: {
        '35mm': '3 / 2',
      }
    },
  },
  plugins: [],
};
