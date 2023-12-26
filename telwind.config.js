tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
          'container': '1150px',
        },
        fontFamily: {
          'poppins': "'Poppins', sans-serif",
        },
        colors: {
          red: 'red',
          linear: 'rgba(0, 0, 0, 0.7)',
          button:'rgba(255, 255, 255, 0.5)'
        },
        backgroundImage: {
          'banner': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) ,url('images/banner.jpg')",
        }
      }
    }
  }
