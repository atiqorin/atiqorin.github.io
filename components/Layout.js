import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:type" content="website" />
      <meta property="type" content="website" />
      <meta property="og:description" content="ATIQ KHAN PORTFOLIO / Full Stack Developer / Software engineer" />
      <meta property="description" content="ATIQ KHAN PORTFOLIO / Full Stack Developer / Software engineer" />
      <meta name="theme-color" content="#052D3D" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="ATIQ KHAN PORTFOLIO" />
      <meta name="author" content="Atiq Khan" />
      <title>Atiq Khan</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" />

      <link rel="icon" type="image/x-icon" href="static/favicon.ico" />
    </Head>
    {children}
  </div>
)