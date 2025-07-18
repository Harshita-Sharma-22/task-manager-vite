/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6f7ff',
          500: '#1890ff', // Ant Design blue
          600: '#096dd9',
        },
        secondary: {
          500: '#722ed1', // Purple
        },
        success: {
          500: '#52c41a', // Green
        },
      },
      boxShadow: {
        'card': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'input': '0 0 0 2px rgba(24, 144, 255, 0.2)',
      }
    }
  }
 }
