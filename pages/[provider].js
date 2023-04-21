import { ottList } from '@/data/Staticdata'
import React from 'react'

function ProviderDetailsPage(props) {
  console.log(props, 'props====================')
  const { providerData } = props
  return (
    <div className='provider-detail-page'>
      <img src={providerData.url} alt={providerData.label} width={50} height={50} />
      <span>{providerData.label} Page</span>
    </div>
  )
}
export async function getServerSideProps(context) {
  const { params } = context
  const { provider } = params
  const providerData = ottList.find(item => item.label === provider)
  if (!provider) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      providerData,
    },
  }
}

export default ProviderDetailsPage
