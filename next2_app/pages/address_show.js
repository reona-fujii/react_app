import Link from 'next/link';
import Layout from '../components/Layout';
import AddressShow from '../components/AddressShow';
import firebase from "firebase";

export default () => (
  <Layout header="Address" title="address book.">
    <AddressShow />
    <hr />
    <div>
      <Link href ="/address">
        <button>Back</button>
      </Link>
    </div>
  </Layout>
);