import React from 'react'
import ReactHelmet from 'react-helmet'
import PropTypes from 'prop-types'

const Helmet = () => {
  const title = 'Loïc Masson Portofolio'
  const description = 'Portfolio of  Loïc, who is quite cool'

  return (
    <ReactHelmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />

      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='en_US' />
      <meta name='og:type' content='website' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />

      <link
        href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        rel='stylesheet'
        integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
        crossOrigin='anonymous'
      />
    </ReactHelmet>
  )
}

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
}

export default Helmet
