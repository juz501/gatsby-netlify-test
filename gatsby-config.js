module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Netlify Gatsby Test",
        short_name: "netgats",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0000ee",
        display: "minimal-ui"
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
