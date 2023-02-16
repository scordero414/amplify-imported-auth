import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { Amplify } from 'aws-amplify';
import awsmobile from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsmobile);


const inter = Inter({ subsets: ['latin'] })

 function Home() {
  return (
        <button>hola</button>
  )
}

export default withAuthenticator(Home)