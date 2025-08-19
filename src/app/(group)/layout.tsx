
import Header from './component/Header'
//@ts-ignore
export default function layout({children,modal}) {
  return (
    <div>
      <Header/>
      {modal}
      {children}
    </div>
  )
}

