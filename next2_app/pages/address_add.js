import Link from 'next/Link';
import Layout from '../components/Layout';

import AddressAdd from '../components/AddressAdd';
import firebase from "firebase";

export default () => (
  <Layout header="Address" title="address create.">
    <AddressAdd />
    <hr />
    <Link href ="/address">
      <button>back</button>
    </Link>
  </Layout>
);
