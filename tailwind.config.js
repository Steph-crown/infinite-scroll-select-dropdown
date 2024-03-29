/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Unigeo64Bold: ['Unigeo64Bold', 'sans-serif'],
        ModeratMedium: ['ModeratMedium', 'sans-serif'],
        ModeratBold: ['ModeratBold', 'sans-serif'],
        ModeratRegular: ['ModeratRegular', 'sans-serif'],
      },
      colors: {
        'neutral/50': '#F7F8F9',
        'neutral/100': '#E7EAEE',
        'neutral/200': '#D0D5DD',
        'neutral/300': '#B8C0CC',
        'neutral/400': '#A0ABBB',
        'neutral/500': '#64748B',
        'neutral/600': '#4B5768',
        'neutral/700': '#323A46',
        'neutral/800': '#191D23',
        'neutral/900': '#0D0F11',

        'grey/50': '#FAFAFA',
        'grey/100': '#EAEAEB',
        'grey/200': '#D5D6D7',
        'grey/300': '#BBBCBD',
        'grey/400': '#A1A2A4',
        'grey/500': '#96989A',
        'grey/600': '#838587',
        'grey/700': '#5D5F61',
        'grey/800': '#38393A',
        'grey/900': '#131313',

        'primary/50': '#FDF5F5',
        'primary/100': '#F8D7D8',
        'primary/200': '#F1AEB0',
        'primary/300': '#E87C7F',
        'primary/400': '#DF494E',
        'primary/500': '#DB353A',
        'primary/600': '#CA2429',
        'primary/700': '#901A1D',
        'primary/800': '#570F12',
        'primary/900': '#1D0506',

        'secondary/blue/50': '#F4FAFC',
        'secondary/blue/100': '#D1EDF4',
        'secondary/blue/200': '#A4DAE9',
        'secondary/blue/300': '#6AC3DB',
        'secondary/blue/400': '#32ACCD',
        'secondary/blue/500': '#2C99B6',
        'secondary/blue/600': '#26869F',
        'secondary/blue/700': '#1C6072',
        'secondary/blue/800': '#103944',
        'secondary/blue/900': '#061317',

        'secondary/green/50': '#F6FAF7',
        'secondary/green/100': '#DBEBDF',
        'secondary/green/200': '#B7D6BF',
        'secondary/green/300': '#8BBD97',
        'secondary/green/400': '#5EA36F',
        'secondary/green/500': '#539263',
        'secondary/green/600': '#498057',
        'secondary/green/700': '#345B3E',
        'secondary/green/800': '#1F3725',
        'secondary/green/900': '#0A120C',

        'secondary/yellow/50': '#FFFCF2',
        'secondary/yellow/100': '#FFF2CC',
        'secondary/yellow/200': '#FFE599',
        'secondary/yellow/300': '#FFD459',
        'secondary/yellow/400': '#FFC419',
        'secondary/yellow/500': '#FEBD00',
        'secondary/yellow/600': '#DEA500',
        'secondary/yellow/700': '#9F7600',
        'secondary/yellow/800': '#5F4700',
        'secondary/yellow/900': '#201800',

        'success/50': '#ECFDF5',
        'success/500': '#10B981',

        'error/50': '#FFEBF1',
        'error/100': '#FEE4E2',
        'error/500': '#E1004B',

        'warning/50': '#FFF1D6',
        'warning/500': '#EB9B00',

        'shades/black': '#222222',
        'shades/white': '#FFFFFF',
      },
      screens: {
        xs: '350px',
        xss: '400px',
      },
    },
  },
  plugins: [],
}
