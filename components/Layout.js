import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/cerulean/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children} {/* whatever pg you're on will output here */}
    </div>
  </div>
);

export default Layout;
