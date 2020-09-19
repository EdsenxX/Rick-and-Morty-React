import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Montserrat&display=swap');
        </style>
      </Html>
    );
  }
}

export default MyDocument;
