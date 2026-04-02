import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import awsmobile from '../aws-exports'

Amplify.configure(awsmobile)

const AccountPage = () => (
  <Layout>
    <SEO title="MY ACCOUNT" />
  </Layout>
)

export default withAuthenticator(AccountPage)
