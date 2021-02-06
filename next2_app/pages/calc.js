import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default () => (
  <Layout header="Calc" title="caluculator">
    <Calc />
    <hr/>
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to top</button>
      </Link>
    </div>
  </Layout>
);