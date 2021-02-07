import Link from 'next/link';
import Layout from '../components/Layout';
import Sampledata from '../components/Sampledata';
import Firedelete from '../components/Firedelete';

export default () => (
  <Layout header = "Fire" title="Sample data." >
    <Sampledata />
    <Firedelete />
  </Layout>
);