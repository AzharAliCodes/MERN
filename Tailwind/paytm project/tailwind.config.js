/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        nilla: "#00baf2",
        darkNilla: '#002970',
        ultalightNilla :'#4ccff6'
      },
      screens : {
            'verySmall' : {'max' : "399px"},
            'small' : {'max' :"550px"},
            'medium' :{'max' :"768px"},
            'large': {'max':'1070px'},
        }
    },
  },
  plugins: [],
}