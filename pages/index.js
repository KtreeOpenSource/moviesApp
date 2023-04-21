import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ottList } from '@/data/Staticdata'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='ott-container'>
      {ottList.map((item, index) => {
        return (
          <Link key={index} href={`${item.label}`}>
            <div key={index} className='ott-item'>
              <img src={item.url} alt={item.label} width={50} height={50} />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
