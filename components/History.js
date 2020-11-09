import React, { useState, useEffect} from 'react'

export default function History({ document }) {
  const [visible, setVisible] = useState(false)
  const [docuemnt, setDocument] = useState(null)

  useEffect(() => {
    setDocument(document)
    console.log('document', document)
  },[])

  const showHistory = () => {
    // const node = document.querySelector("#right")
    // console.log('document', document)
  }

  return (
    <>
     
    </>
    // <div>
    //   <button
    //     onClick={() => setVisible(!visible)}
    //     // onClick={showHistory()}
    //   >
    //     history
    //   </button>
    //   { visible && (
    //     <div>
    //       herro
    //     </div>
    //   )}
    // </div>
  )
}
